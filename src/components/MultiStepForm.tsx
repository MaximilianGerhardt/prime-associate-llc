'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, ArrowLeft, CheckCircle, Phone, Mail, Building, DollarSign, Clock, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  { id: 1, title: 'Contact', icon: Mail },
  { id: 2, title: 'Company', icon: Building },
  { id: 3, title: 'Investment', icon: DollarSign },
  { id: 4, title: 'Callback', icon: Phone },
  { id: 5, title: 'Details', icon: MessageSquare },
]

const investmentRanges = [
  { value: '500k-1m', label: '$500K - $1M' },
  { value: '1m-3m', label: '$1M - $3M' },
  { value: '3m-5m', label: '$3M - $5M' },
  { value: '5m-10m', label: '$5M - $10M' },
  { value: '10m+', label: '$10M+' },
]

const callbackTimes = [
  { value: 'morning', label: 'Morning (9am - 12pm)' },
  { value: 'afternoon', label: 'Afternoon (12pm - 5pm)' },
  { value: 'evening', label: 'Evening (5pm - 8pm)' },
  { value: 'asap', label: 'As soon as possible' },
]

const timezones = [
  { value: 'EST', label: 'EST (New York)' },
  { value: 'PST', label: 'PST (Los Angeles)' },
  { value: 'GMT', label: 'GMT (London)' },
  { value: 'CET', label: 'CET (Berlin)' },
  { value: 'GST', label: 'GST (Dubai)' },
  { value: 'SGT', label: 'SGT (Singapore)' },
]

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  companyName: string
  website: string
  revenue: string
  investmentRange: string
  callbackTime: string
  timezone: string
  message: string
}

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    revenue: '',
    investmentRange: '',
    callbackTime: '',
    timezone: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateStep = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    
    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    }
    
    if (currentStep === 2) {
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required'
    }
    
    if (currentStep === 3) {
      if (!formData.investmentRange) newErrors.investmentRange = 'Please select an investment range'
    }
    
    if (currentStep === 4) {
      if (!formData.callbackTime) newErrors.callbackTime = 'Please select a callback time'
      if (!formData.timezone) newErrors.timezone = 'Please select your timezone'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 5))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep()) return
    
    setLoading(true)
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName,
          website: formData.website,
          revenue: formData.revenue,
          investmentRange: formData.investmentRange,
          callbackTime: formData.callbackTime,
          timezone: formData.timezone,
          message: formData.message,
        }),
      })

      if (!response.ok) throw new Error('Submission failed')
      setSuccess(true)
    } catch {
      setErrors({ email: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-secondary border border-accent/20 p-12 text-center">
        <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
        <h3 className="font-serif text-2xl text-foreground mb-4">Application Received</h3>
        <p className="text-muted mb-2">
          Our team will review your submission and reach out within 48 hours.
        </p>
        <p className="text-accent text-sm">
          Expect a call during your selected time window.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-secondary border border-muted/20 p-8 md:p-12">
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div 
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
                currentStep >= step.id 
                  ? 'bg-accent text-primary' 
                  : 'bg-muted/20 text-muted'
              )}
            >
              {currentStep > step.id ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <step.icon className="w-5 h-5" />
              )}
            </div>
            {index < steps.length - 1 && (
              <div 
                className={cn(
                  'hidden sm:block w-12 md:w-20 h-0.5 mx-2',
                  currentStep > step.id ? 'bg-accent' : 'bg-muted/20'
                )}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-foreground mb-6">Your Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <Input
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
            </div>
            <Input
              name="email"
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-foreground mb-6">Your Company</h3>
            <Input
              name="companyName"
              placeholder="Company Name *"
              value={formData.companyName}
              onChange={handleChange}
              error={errors.companyName}
            />
            <Input
              name="website"
              placeholder="Website (optional)"
              value={formData.website}
              onChange={handleChange}
            />
            <Input
              name="revenue"
              placeholder="Current Annual Revenue (optional)"
              value={formData.revenue}
              onChange={handleChange}
            />
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-foreground mb-6">Investment Interest</h3>
            <p className="text-muted text-sm mb-4">Select the investment range you&apos;re seeking:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {investmentRanges.map((range) => (
                <button
                  key={range.value}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, investmentRange: range.value }))}
                  className={cn(
                    'p-4 border text-left transition-all duration-300',
                    formData.investmentRange === range.value
                      ? 'border-accent bg-accent/10 text-foreground'
                      : 'border-muted/30 text-muted hover:border-muted'
                  )}
                >
                  {range.label}
                </button>
              ))}
            </div>
            {errors.investmentRange && (
              <p className="text-sm text-red-500">{errors.investmentRange}</p>
            )}
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-foreground mb-6">Schedule Your Callback</h3>
            <p className="text-muted text-sm mb-4">When should we call you?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {callbackTimes.map((time) => (
                <button
                  key={time.value}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, callbackTime: time.value }))}
                  className={cn(
                    'p-4 border text-left transition-all duration-300',
                    formData.callbackTime === time.value
                      ? 'border-accent bg-accent/10 text-foreground'
                      : 'border-muted/30 text-muted hover:border-muted'
                  )}
                >
                  {time.label}
                </button>
              ))}
            </div>
            {errors.callbackTime && (
              <p className="text-sm text-red-500">{errors.callbackTime}</p>
            )}
            
            <p className="text-muted text-sm mb-4">Your timezone:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {timezones.map((tz) => (
                <button
                  key={tz.value}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, timezone: tz.value }))}
                  className={cn(
                    'p-3 border text-center text-sm transition-all duration-300',
                    formData.timezone === tz.value
                      ? 'border-accent bg-accent/10 text-foreground'
                      : 'border-muted/30 text-muted hover:border-muted'
                  )}
                >
                  {tz.label}
                </button>
              ))}
            </div>
            {errors.timezone && (
              <p className="text-sm text-red-500">{errors.timezone}</p>
            )}
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-foreground mb-6">Additional Information</h3>
            <p className="text-muted text-sm mb-4">
              Tell us briefly about your venture and what you&apos;re looking to achieve:
            </p>
            <Textarea
              name="message"
              placeholder="Your message (optional)"
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="flex justify-between mt-8">
          {currentStep > 1 ? (
            <Button type="button" variant="ghost" onClick={prevStep}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          ) : (
            <div />
          )}
          
          {currentStep < 5 ? (
            <Button type="button" onClick={nextStep}>
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button type="submit" loading={loading}>
              Submit Application
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
