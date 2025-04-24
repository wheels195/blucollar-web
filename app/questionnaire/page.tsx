"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion } from "framer-motion"
import { CheckCircle2, Circle } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggeredText } from "@/components/staggered-text"

const formSchema = z.object({
  businessName: z.string().min(1, { message: "Please enter your business name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  currentWebsite: z.string().optional(),
  websiteGoal: z.array(z.string()).min(1, { message: "Please select at least one goal" }),
  websiteGoalOther: z.string().optional(),
  targetAudience: z.string().min(1, { message: "Please describe your target audience" }),
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  servicesOther: z.string().optional(),
  branding: z.string().min(1, { message: "Please select an option" }),
  content: z.string().min(1, { message: "Please select an option" }),
  websiteInspiration: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().min(1, { message: "Please select a budget range" }),
  additionalInfo: z.string().optional(),
})

export default function QuestionnairePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      email: "",
      currentWebsite: "",
      websiteGoal: [],
      websiteGoalOther: "",
      targetAudience: "",
      services: [],
      servicesOther: "",
      branding: "",
      content: "",
      websiteInspiration: "",
      timeline: "",
      budget: "",
      additionalInfo: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/questionnaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (!response.ok) {
        console.error('Server response:', data)
        throw new Error(data.message || 'Failed to submit questionnaire')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting questionnaire:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const CheckboxOption = ({
    id,
    value,
    label,
    checked,
    onChange,
  }: {
    id: string
    value: string
    label: string
    checked: boolean
    onChange: (checked: boolean) => void
  }) => {
    return (
      <div
        className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-accent/50 cursor-pointer transition-colors"
        onClick={() => onChange(!checked)}
      >
        <div className="text-primary">
          {checked ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
        </div>
        <label htmlFor={id} className="cursor-pointer flex-1">
          {label}
        </label>
        <input
          type="checkbox"
          id={id}
          value={value}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
      </div>
    )
  }

  const RadioOption = ({
    id,
    value,
    label,
    checked,
    onChange,
  }: {
    id: string
    value: string
    label: string
    checked: boolean
    onChange: () => void
  }) => {
    return (
      <div
        className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-accent/50 cursor-pointer transition-colors"
        onClick={onChange}
      >
        <div className="text-primary">
          {checked ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
        </div>
        <label htmlFor={id} className="cursor-pointer flex-1">
          {label}
        </label>
        <input type="radio" id={id} value={value} checked={checked} onChange={onChange} className="sr-only" />
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className="container max-w-4xl mx-auto py-16 px-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              <StaggeredText text="Thank You!" />
            </CardTitle>
            <CardDescription className="text-center text-lg mt-4">
              We've received your questionnaire responses and will be in touch soon.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6"
            >
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </motion.div>
            <p className="text-center max-w-md">
              Our team will review your information and contact you to discuss your project in detail.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={() => (window.location.href = "/")}>Return to Home</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl mx-auto py-16 px-4">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">
            <StaggeredText text="New Customer Questionnaire" />
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Help us understand your project better by filling out this questionnaire. Your answers will guide us in
            creating the perfect website for your business.
          </p>
        </div>
      </ScrollReveal>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Tell us about your project</CardTitle>
          <CardDescription>Please provide as much detail as possible to help us understand your needs.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>1. What's the name of your business or brand?</FormLabel>
                        <FormControl>
                          <Input placeholder="Your business name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What's your email address?</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="currentWebsite"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>2. Do you currently have a website? If yes, please share the URL.</FormLabel>
                        <FormControl>
                          <Input placeholder="https://yourwebsite.com (leave blank if none)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="websiteGoal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>3. What's the main goal of your new or redesigned website?</FormLabel>
                        <FormDescription>Select all that apply</FormDescription>
                        <div className="grid gap-3 pt-2">
                          <CheckboxOption
                            id="goal-leads"
                            value="Generate leads"
                            label="Generate leads"
                            checked={field.value.includes("Generate leads")}
                            onChange={(checked) => {
                              if (checked) {
                                field.onChange([...field.value, "Generate leads"])
                              } else {
                                field.onChange(field.value.filter((v) => v !== "Generate leads"))
                              }
                            }}
                          />
                          <CheckboxOption
                            id="goal-sell"
                            value="Sell products/services"
                            label="Sell products/services"
                            checked={field.value.includes("Sell products/services")}
                            onChange={(checked) => {
                              if (checked) {
                                field.onChange([...field.value, "Sell products/services"])
                              } else {
                                field.onChange(field.value.filter((v) => v !== "Sell products/services"))
                              }
                            }}
                          />
                          <CheckboxOption
                            id="goal-portfolio"
                            value="Showcase portfolio"
                            label="Showcase portfolio"
                            checked={field.value.includes("Showcase portfolio")}
                            onChange={(checked) => {
                              if (checked) {
                                field.onChange([...field.value, "Showcase portfolio"])
                              } else {
                                field.onChange(field.value.filter((v) => v !== "Showcase portfolio"))
                              }
                            }}
                          />
                          <CheckboxOption
                            id="goal-appointments"
                            value="Book appointments"
                            label="Book appointments"
                            checked={field.value.includes("Book appointments")}
                            onChange={(checked) => {
                              if (checked) {
                                field.onChange([...field.value, "Book appointments"])
                              } else {
                                field.onChange(field.value.filter((v) => v !== "Book appointments"))
                              }
                            }}
                          />
                          <CheckboxOption
                            id="goal-other"
                            value="Other"
                            label="Other"
                            checked={field.value.includes("Other")}
                            onChange={(checked) => {
                              if (checked) {
                                field.onChange([...field.value, "Other"])
                              } else {
                                field.onChange(field.value.filter((v) => v !== "Other"))
                              }
                            }}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {form.watch("websiteGoal").includes("Other") && (
                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="websiteGoalOther"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Please specify other goal(s)</FormLabel>
                          <FormControl>
                            <Input placeholder="Other website goals" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="targetAudience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>4. Who is your target audience?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your ideal customers or clients"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="services"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>5. What services or pages do you need?</FormLabel>
                        <FormDescription>Select all that apply</FormDescription>
                        <div className="grid gap-3 pt-2">
                          <CheckboxOption
                            id="service-home"
                            value="Home"
                            label="Home"
                            checked={field.value.includes("Home")}
                            onChange={(checked) => {
                              if (checked) {
                                field.onChange([...field.value, "Home"])
                              } else {
                                field.onChange(field.value.filter((v) => v !== "Home"))
                              }
                            }}
                          />
                          <CheckboxOption
                            id="service-about"
                            value="About"
                            label="About"
                            checked={field.value.includes("About")}
                            onChange={(checked) => {
                              if (checked) {
                                field.onChange([...field.value, "About"])
                              } else {
                                field.onChange(field.value.filter((v) => v !== "About"))
                              }
                            }}
                          />
                          <CheckboxOption
                            id="service-services"
                            value="Services"
                            label="Services"
                            checked={field.value.includes("Services")}
                            onChange={(checked) => {
                              if (checked) {
                                field.onChange([...field.value, "Services"])
                              } else {
                                field.onChange(field.value.filter((v) => v !== "Services"))
                              }
                            }}
                          />
                          <CheckboxOption
                            id="service-portfolio"
                            value="Portfolio"
                            label="Portfolio"
                            checked={field.value.includes("Portfolio")}
                            onChange={(checked) => {
                              if (checked) {
                                field.onChange([...field.value, "Portfolio"])
                              } else {
                                field.onChange(field.value.filter((v) => v !== "Portfolio"))
                              }
                            }}
                          />
                          <CheckboxOption
                            id="service-blog"
                            value="Blog"
                            label="Blog"
                            checked={field.value.includes("Blog")}
                            onChange={(checked) => {
                              if (checked) {
                                field.onChange([...field.value, "Blog"])
                              } else {
                                field.onChange(field.value.filter((v) => v !== "Blog"))
                              }
                            }}
                          />
                          <CheckboxOption
                            id="service-contact"
                            value="Contact"
                            label="Contact"
                            checked={field.value.includes("Contact")}
                            onChange={(checked) => {
                              if (checked) {
                                field.onChange([...field.value, "Contact"])
                              } else {
                                field.onChange(field.value.filter((v) => v !== "Contact"))
                              }
                            }}
                          />
                          <CheckboxOption
                            id="service-other"
                            value="Other"
                            label="Other"
                            checked={field.value.includes("Other")}
                            onChange={(checked) => {
                              if (checked) {
                                field.onChange([...field.value, "Other"])
                              } else {
                                field.onChange(field.value.filter((v) => v !== "Other"))
                              }
                            }}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {form.watch("services").includes("Other") && (
                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="servicesOther"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Please specify other services/pages</FormLabel>
                          <FormControl>
                            <Input placeholder="Other services or pages needed" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="branding"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>6. Do you already have branding (logo, colors, fonts)?</FormLabel>
                        <div className="grid gap-3 pt-2">
                          <RadioOption
                            id="branding-yes"
                            value="Yes"
                            label="Yes"
                            checked={field.value === "Yes"}
                            onChange={() => field.onChange("Yes")}
                          />
                          <RadioOption
                            id="branding-no"
                            value="No"
                            label="No"
                            checked={field.value === "No"}
                            onChange={() => field.onChange("No")}
                          />
                          <RadioOption
                            id="branding-partially"
                            value="Partially"
                            label="Partially"
                            checked={field.value === "Partially"}
                            onChange={() => field.onChange("Partially")}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>7. Do you have website content ready (text, images, videos)?</FormLabel>
                        <div className="grid gap-3 pt-2">
                          <RadioOption
                            id="content-yes"
                            value="Yes"
                            label="Yes"
                            checked={field.value === "Yes"}
                            onChange={() => field.onChange("Yes")}
                          />
                          <RadioOption
                            id="content-no"
                            value="No"
                            label="No"
                            checked={field.value === "No"}
                            onChange={() => field.onChange("No")}
                          />
                          <RadioOption
                            id="content-help"
                            value="I'll need help with that"
                            label="I'll need help with that"
                            checked={field.value === "I'll need help with that"}
                            onChange={() => field.onChange("I'll need help with that")}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="websiteInspiration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>8. Are there any websites you like the look/feel of? (Drop links)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="https://example.com, https://anothersite.com"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>9. Do you have a preferred timeline or launch date?</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 2 months, by December 1st, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>10. What's your approximate budget?</FormLabel>
                        <div className="grid gap-3 pt-2">
                          <RadioOption
                            id="budget-1000"
                            value="Under $1,000"
                            label="Under $1,000"
                            checked={field.value === "Under $1,000"}
                            onChange={() => field.onChange("Under $1,000")}
                          />
                          <RadioOption
                            id="budget-1000-2000"
                            value="$1,000–$2,000"
                            label="$1,000–$2,000"
                            checked={field.value === "$1,000–$2,000"}
                            onChange={() => field.onChange("$1,000–$2,000")}
                          />
                          <RadioOption
                            id="budget-2000-5000"
                            value="$2,000–$5,000"
                            label="$2,000–$5,000"
                            checked={field.value === "$2,000–$5,000"}
                            onChange={() => field.onChange("$2,000–$5,000")}
                          />
                          <RadioOption
                            id="budget-5000+"
                            value="$5,000+"
                            label="$5,000+"
                            checked={field.value === "$5,000+"}
                            onChange={() => field.onChange("$5,000+")}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>11. Is there anything else you want us to know?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any additional information that might help us understand your project better"
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {error && (
                  <div className="text-red-500 text-sm">
                    {error}
                  </div>
                )}

                <motion.div variants={itemVariants} className="pt-4">
                  <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Submitting...</span>
                        {/* You can add a loading spinner here if you want */}
                      </>
                    ) : (
                      'Submit Questionnaire'
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
} 