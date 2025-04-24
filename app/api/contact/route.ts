import { NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from 'nodemailer'

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  businessName: z.string().optional(),
  currentWebsite: z.string().optional(),
  websiteGoal: z.array(z.string()).optional(),
  websiteGoalOther: z.string().optional(),
  targetAudience: z.string().optional(),
  requiredPages: z.array(z.string()).optional(),
  requiredPagesOther: z.string().optional(),
  hasBranding: z.enum(['Yes', 'No', 'Partially']).optional(),
  hasContent: z.enum(['Yes', 'No', "I'll need help with that"]).optional(),
  websiteInspiration: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.enum(['Under $1,000', '$1,000–$2,000', '$2,000–$5,000', '$5,000+']).optional(),
  additionalInfo: z.string().optional()
})

// Create nodemailer transporter
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
    // Parse the request body
    const body = await request.json()
    console.log('Received form submission:', body)

    // Validate the form data
    const result = contactFormSchema.safeParse(body)

    if (!result.success) {
      console.log('Validation failed:', result.error.flatten().fieldErrors)
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { name, email, phone, message, businessName, currentWebsite, websiteGoal, websiteGoalOther, targetAudience, requiredPages, requiredPagesOther, hasBranding, hasContent, websiteInspiration, timeline, budget, additionalInfo } = result.data
    const firstName = name.split(' ')[0] // Get first name for personalization

    // Prepare email content
    const autoReplyOptions = {
      from: `"${process.env.COMPANY_NAME}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out!",
      text: `
Hi ${firstName},

Thanks for reaching out — and congratulations on taking the next step to grow your business! We've received your message and will get back to you within 24 hours.

Complete this quick questionnaire to get the best results!
${process.env.NEXT_PUBLIC_BASE_URL}/questionnaire

Best regards,
${process.env.COMPANY_NAME}
      `,
      html: `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #000000;">
  <p>Hi ${firstName},</p>

  <p>Thanks for reaching out — and congratulations on taking the next step to grow your business! We've received your message and will get back to you within 24 hours.</p>

  <p><a href="${process.env.NEXT_PUBLIC_BASE_URL}/questionnaire" style="color: #000000; text-decoration: underline;">Complete this quick questionnaire to get the best results!</a></p>

  <p>Best regards,<br>${process.env.COMPANY_NAME}</p>
</body>
</html>
      `
    }

    const notificationOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Contact Form Submission from ${name}`,
      text: `
New contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
      `,
      html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <h3>Message:</h3>
    <p>${message}</p>
  `
    }

    console.log('Attempting to send emails...')
    
    // Send emails
    await Promise.all([
      transporter.sendMail(autoReplyOptions),
      transporter.sendMail(notificationOptions)
    ])
    
    console.log('Emails sent successfully')

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    
    // Return error response
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
