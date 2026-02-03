import { z } from 'zod'

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  investmentRange: z.string().optional(),
  message: z.string().optional(),
})

export type LeadFormData = z.infer<typeof leadFormSchema>

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export type NewsletterFormData = z.infer<typeof newsletterSchema>
