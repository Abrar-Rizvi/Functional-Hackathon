


"use client"

import { useState, useEffect } from "react"
import { Poppins } from "next/font/google"
import CheckoutDetails from "./CheckoutDetails"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { client } from "@/sanity/lib/client"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
// import { Textarea } from "@/components/ui/textarea"

// Load Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

// Form Validation Schema
const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required").max(50),
  lastName: z.string().min(1, "Last Name is required").max(50),
  companyName: z.string().optional(),
  country: z.string().min(1, "Country is required").max(20),
  city: z.string().min(1, "City is required").max(20),
  zipCode: z.string().min(4, "Zip Code must be at least 4 characters").max(10),
  phone: z.string().regex(/^\+?\d{7,15}$/, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  additionalInfo: z.string().optional(),
})

// Define Form Types
type FormType = z.infer<typeof formSchema>

const CheckoutForm = () => {
  // Initialize React Hook Form (do not conditionally call)
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
  })

  const [mounted, setMounted] = useState(false)

  // Ensure hydration only happens after mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent SSR Mismatch by rendering nothing until mounted
  if (!mounted) return null

  // Submit Handler
  async function onSubmit(values: FormType) {
    await client.create({
      _type: "contactForm",
      name: values.firstName,
      lastName: values.lastName,
      company: values.companyName,
      country: values.country,
      city: values.city,
      zipCode: values.zipCode,
      phone: values.phone,
      email: values.email,
      additionalInfo: values.additionalInfo,
    })
    console.log(values)
  }

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-8 lg:max-w-[1000px] mx-auto py-12">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`lg:max-w-[500px] w-full space-y-4 p-6 border border-gray-300 rounded-lg shadow-md ${poppins.className}`}
        >
          <h2 className="text-[36px] font-semibold">Billing details</h2>

          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company Name */}
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Danpak" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Country */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country/Region</FormLabel>
                <FormControl>
                  <Input placeholder="Pakistan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Karachi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Zip Code */}
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input placeholder="75200" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+923100000000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Additional Info */}
          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Input placeholder="Any special instructions..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {/* Checkout Details Component */}
      <CheckoutDetails />
    </div>
  )
}

export default CheckoutForm
