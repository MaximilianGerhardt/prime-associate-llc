'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { leadFormSchema, type LeadFormData } from '@/lib/validations'
import { ArrowRight, CheckCircle } from 'lucide-react'

const investmentRanges = [
  { value: '500k-1m', label: '$500K - $1M' },
  { value: '1m-5m', label: '$1M - $5M' },
  { value: '5m-10m', label: '$5M - $10M' },
  { value: '10m+', label: '$10M+' },
]

export function LeadForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    company: '',
    investmentRange: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof LeadFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})

    const result = leadFormSchema.safeParse(formData)
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LeadFormData, string>> = {}
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as keyof LeadFormData] = issue.message
        }
      })
      setErrors(fieldErrors)
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Submission failed')
      
      setSuccess(true)
      setFormData({ name: '', email: '', company: '', investmentRange: '', message: '' })
    } catch {
      setErrors({ email: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-secondary/50 border border-accent/20 p-8 text-center">
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
        <h3 className="text-xl font-serif text-foreground mb-2">Inquiry Received</h3>
        <p className="text-muted">
          If there is alignment, our team will reach out within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          name="company"
          placeholder="Company / Venture"
          value={formData.company}
          onChange={handleChange}
          error={errors.company}
        />
        <Select
          name="investmentRange"
          placeholder="Investment Range"
          options={investmentRanges}
          value={formData.investmentRange}
          onChange={handleChange}
          error={errors.investmentRange}
        />
      </div>

      <Textarea
        name="message"
        placeholder="Brief description of your venture and objectives"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />

      <Button type="submit" loading={loading} size="lg" className="w-full md:w-auto">
        Submit Inquiry
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>

      <p className="text-xs text-muted">
        By submitting, you acknowledge that not all inquiries proceed. Qualification is by design.
      </p>
    </form>
  )
}
