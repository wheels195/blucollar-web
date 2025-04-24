"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Loader2 } from "lucide-react"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  })

  function handleTestClick() {
    alert("Test button clicked!");
    console.log("Test button clicked!");
  }

  async function onSubmit(data: FormValues) {
    alert("Form submission started!");
    console.log("Form data:", data);
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setIsSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Error:", err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-gray-700 bg-gray-800 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white">Thank You!</h3>
        <p className="mt-2 text-gray-300">Your message has been received. We'll get back to you as soon as possible.</p>
        <Button className="mt-6 bg-blue-600 hover:bg-blue-700 rounded-full" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 md:p-8">
      <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>

      <Button onClick={handleTestClick} className="mb-4">
        Test Console Log
      </Button>

      {error && (
        <div className="mb-6 rounded-lg bg-red-900/20 p-4 text-red-400 border border-red-800">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    {...field}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your email address"
                    type="email"
                    {...field}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Phone (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your phone number"
                    type="tel"
                    {...field}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Company (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your company name"
                    {...field}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Service Interested In</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-gray-700 border-gray-600 text-white">
                  <SelectItem value="basic">Basic Website Package</SelectItem>
                  <SelectItem value="professional">Professional Website Package</SelectItem>
                  <SelectItem value="premium">Premium Website Package</SelectItem>
                  <SelectItem value="rebuild">Website Rebuild</SelectItem>
                  <SelectItem value="maintenance">Maintenance Plan</SelectItem>
                  <SelectItem value="other">Other / Not Sure Yet</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project or questions"
                  rows={5}
                  {...field}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full bg-blue-600 hover:bg-blue-700 rounded-full"
          onClick={() => console.log("Submit button clicked directly")}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  )
}
