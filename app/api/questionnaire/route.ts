import { NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from 'nodemailer'

const questionnaireSchema = z.object({
  businessName: z.string().min(1),
  email: z.string().email(),
  currentWebsite: z.string().optional(),
  websiteGoal: z.array(z.string()).min(1),
  websiteGoalOther: z.string().optional(),
  targetAudience: z.string().min(1),
  services: z.array(z.string()).min(1),
  servicesOther: z.string().optional(),
  branding: z.string().min(1),
  content: z.string().min(1),
  websiteInspiration: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().min(1),
  additionalInfo: z.string().optional(),
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Received form data:', body)
    
    const result = questionnaireSchema.safeParse(body)

    if (!result.success) {
      console.log('Validation errors:', result.error.flatten().fieldErrors)
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    // Send notification email to business owner
    const notificationOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Website Questionnaire: ${result.data.businessName}`,
      text: `
New Website Questionnaire Submission

Business Information:
--------------------
Business Name: ${result.data.businessName}
Email: ${result.data.email}
Current Website: ${result.data.currentWebsite || 'None'}

Project Scope:
-------------
Website Goals: ${result.data.websiteGoal.join(', ')}
${result.data.websiteGoalOther ? `Additional Goals: ${result.data.websiteGoalOther}` : ''}
Target Audience: ${result.data.targetAudience}

Requested Services:
-----------------
${result.data.services.join(', ')}
${result.data.servicesOther ? `Additional Services: ${result.data.servicesOther}` : ''}

Current Assets:
-------------
Branding Status: ${result.data.branding}
Content Status: ${result.data.content}

Project Parameters:
-----------------
Website Inspiration/References: ${result.data.websiteInspiration || 'None provided'}
Desired Timeline: ${result.data.timeline || 'Not specified'}
Budget Range: ${result.data.budget}

Additional Notes:
---------------
${result.data.additionalInfo || 'None provided'}
      `,
      html: `
        <h2>New Website Questionnaire Submission</h2>
        
        <h3>Business Information</h3>
        <p><strong>Business Name:</strong> ${result.data.businessName}</p>
        <p><strong>Email:</strong> ${result.data.email}</p>
        <p><strong>Current Website:</strong> ${result.data.currentWebsite || 'None'}</p>
        
        <h3>Project Scope</h3>
        <p><strong>Website Goals:</strong> ${result.data.websiteGoal.join(', ')}</p>
        ${result.data.websiteGoalOther ? `<p><strong>Additional Goals:</strong> ${result.data.websiteGoalOther}</p>` : ''}
        <p><strong>Target Audience:</strong> ${result.data.targetAudience}</p>
        
        <h3>Requested Services</h3>
        <p>${result.data.services.join(', ')}</p>
        ${result.data.servicesOther ? `<p><strong>Additional Services:</strong> ${result.data.servicesOther}</p>` : ''}
        
        <h3>Current Assets</h3>
        <p><strong>Branding Status:</strong> ${result.data.branding}</p>
        <p><strong>Content Status:</strong> ${result.data.content}</p>
        
        <h3>Project Parameters</h3>
        <p><strong>Website Inspiration/References:</strong> ${result.data.websiteInspiration || 'None provided'}</p>
        <p><strong>Desired Timeline:</strong> ${result.data.timeline || 'Not specified'}</p>
        <p><strong>Budget Range:</strong> ${result.data.budget}</p>
        
        <h3>Additional Notes</h3>
        <p>${result.data.additionalInfo || 'None provided'}</p>
      `
    }

    // Send auto-reply to submitter
    const autoReplyOptions = {
      from: `"BluCollar Web" <${process.env.EMAIL_USER}>`,
      to: result.data.email,
      subject: "Thank you for your website questionnaire submission",
      text: `
Dear ${result.data.businessName},

Thank you for taking the time to complete our website questionnaire. This is an important first step in creating your new website.

Our team will carefully review your requirements and get back to you within 1-2 business days to discuss your project in detail.

In the meantime, if you have any questions or additional information to share, please don't hesitate to reach out.

Best regards,
BluCollar Web
      `,
      html: `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #000000;">
  <p>Dear ${result.data.businessName},</p>

  <p>Thank you for taking the time to complete our website questionnaire. This is an important first step in creating your new website.</p>

  <p>Our team will carefully review your requirements and get back to you within 1-2 business days to discuss your project in detail.</p>

  <p>In the meantime, if you have any questions or additional information to share, please don't hesitate to reach out.</p>

  <p>Best regards,<br>BluCollar Web</p>
</body>
</html>
      `
    }

    console.log('Attempting to send emails...')
    
    await Promise.all([
      transporter.sendMail(autoReplyOptions),
      transporter.sendMail(notificationOptions)
    ])
    
    console.log('Emails sent successfully')

    return NextResponse.json({
      success: true,
      message: "Thank you for submitting the questionnaire!",
    })
  } catch (error) {
    console.error("Questionnaire submission error:", error)
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
} 