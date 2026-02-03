'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { Calculator, DollarSign, Clock, TrendingUp, ArrowRight } from 'lucide-react'

export default function CalculatorPage() {
  const [formData, setFormData] = useState({
    employees: '',
    avgSalary: '',
    hoursOnManual: '',
    customerInquiries: '',
    conversionRate: '',
  })
  const [showResults, setShowResults] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const calculateROI = () => {
    const employees = parseInt(formData.employees) || 0
    const avgSalary = parseInt(formData.avgSalary) || 50000
    const hoursOnManual = parseInt(formData.hoursOnManual) || 0
    const customerInquiries = parseInt(formData.customerInquiries) || 0
    const conversionRate = parseFloat(formData.conversionRate) || 2

    const hourlyRate = avgSalary / 2080
    const annualManualCost = employees * hoursOnManual * 52 * hourlyRate
    const automationSavings = annualManualCost * 0.65

    const currentConversions = customerInquiries * 12 * (conversionRate / 100)
    const improvedConversions = customerInquiries * 12 * ((conversionRate + 1.5) / 100)
    const avgDealValue = avgSalary * 0.5
    const revenueIncrease = (improvedConversions - currentConversions) * avgDealValue

    const hoursSaved = employees * hoursOnManual * 52 * 0.65
    const totalOpportunity = automationSavings + revenueIncrease

    return {
      automationSavings: Math.round(automationSavings),
      revenueIncrease: Math.round(revenueIncrease),
      hoursSaved: Math.round(hoursSaved),
      totalOpportunity: Math.round(totalOpportunity),
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  const results = calculateROI()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num)
  }

  if (showResults) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-primary py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm mb-6">
                <Calculator className="w-4 h-4" />
                <span>Your AI ROI Report</span>
              </div>
              <h1 className="text-4xl font-serif text-foreground mb-4">
                Your Hidden AI Opportunity
              </h1>
              <p className="text-muted">
                Based on the information you provided, here&apos;s your potential ROI
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent rounded-xl p-8 mb-8 text-center">
              <p className="text-muted text-sm uppercase tracking-wider mb-2">Total Annual Opportunity</p>
              <p className="text-5xl md:text-6xl font-bold text-accent mb-2">
                {formatCurrency(results.totalOpportunity)}
              </p>
              <p className="text-muted">per year in savings and revenue</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-secondary/50 border border-muted/20 rounded-xl p-6 text-center">
                <DollarSign className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground mb-1">
                  {formatCurrency(results.automationSavings)}
                </p>
                <p className="text-muted text-sm">Labor Cost Savings</p>
              </div>

              <div className="bg-secondary/50 border border-muted/20 rounded-xl p-6 text-center">
                <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground mb-1">
                  {formatCurrency(results.revenueIncrease)}
                </p>
                <p className="text-muted text-sm">Revenue Increase</p>
              </div>

              <div className="bg-secondary/50 border border-muted/20 rounded-xl p-6 text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground mb-1">
                  {formatNumber(results.hoursSaved)}
                </p>
                <p className="text-muted text-sm">Hours Saved Annually</p>
              </div>
            </div>

            <div className="bg-secondary/50 border border-muted/20 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-serif text-foreground mb-4">How We Calculated This:</h3>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">1.</span>
                  <span><strong className="text-foreground">Automation Savings:</strong> Estimated 65% reduction in manual task time through AI automation, based on industry benchmarks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">2.</span>
                  <span><strong className="text-foreground">Revenue Increase:</strong> Conservative 1.5 percentage point improvement in conversion rate from AI-enhanced customer interactions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">3.</span>
                  <span><strong className="text-foreground">Time Savings:</strong> Hours your team can redirect to high-value strategic work.</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-serif text-accent mb-4 text-center">
                Want to Unlock This Potential?
              </h3>
              <p className="text-muted text-center mb-6">
                Schedule a free strategy session to get a detailed implementation roadmap customized for your business.
              </p>
              <a 
                href="/#apply"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors text-lg"
              >
                Apply for Strategy Session <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-secondary/50 border border-muted/20 rounded-xl p-8">
              <h3 className="text-xl font-serif text-foreground mb-4 text-center">
                Get Weekly AI Insights
              </h3>
              <p className="text-muted text-center mb-6">
                Join 2,847+ business leaders receiving actionable AI strategies every week.
              </p>
              <NewsletterSignup variant="inline" source="calculator-results" />
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => setShowResults(false)}
                className="text-muted hover:text-foreground transition-colors"
              >
                ← Recalculate with different numbers
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-primary py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm mb-6">
              <Calculator className="w-4 h-4" />
              <span>Free ROI Calculator</span>
            </div>
            <h1 className="text-4xl font-serif text-foreground mb-4">
              Discover Your Hidden AI Opportunity
            </h1>
            <p className="text-muted max-w-xl mx-auto">
              Answer 5 quick questions to see how much AI automation could save your business annually.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-secondary/50 border border-muted/20 rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-foreground font-medium mb-2">
                  How many employees do you have?
                </label>
                <select
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-muted/30 rounded-lg text-foreground focus:outline-none focus:border-accent"
                >
                  <option value="">Select...</option>
                  <option value="5">1-10</option>
                  <option value="25">11-50</option>
                  <option value="75">51-100</option>
                  <option value="150">101-250</option>
                  <option value="500">250+</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  Average annual salary per employee?
                </label>
                <select
                  name="avgSalary"
                  value={formData.avgSalary}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-muted/30 rounded-lg text-foreground focus:outline-none focus:border-accent"
                >
                  <option value="">Select...</option>
                  <option value="40000">$30K - $50K</option>
                  <option value="60000">$50K - $75K</option>
                  <option value="87500">$75K - $100K</option>
                  <option value="125000">$100K - $150K</option>
                  <option value="175000">$150K+</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  Hours per week each employee spends on repetitive tasks?
                </label>
                <select
                  name="hoursOnManual"
                  value={formData.hoursOnManual}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-muted/30 rounded-lg text-foreground focus:outline-none focus:border-accent"
                >
                  <option value="">Select...</option>
                  <option value="5">Less than 5 hours</option>
                  <option value="10">5-15 hours</option>
                  <option value="20">15-25 hours</option>
                  <option value="30">25+ hours</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  Monthly customer inquiries/leads?
                </label>
                <select
                  name="customerInquiries"
                  value={formData.customerInquiries}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-muted/30 rounded-lg text-foreground focus:outline-none focus:border-accent"
                >
                  <option value="">Select...</option>
                  <option value="50">Under 100</option>
                  <option value="250">100-500</option>
                  <option value="750">500-1,000</option>
                  <option value="2000">1,000-5,000</option>
                  <option value="7500">5,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  Current lead-to-customer conversion rate?
                </label>
                <select
                  name="conversionRate"
                  value={formData.conversionRate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-muted/30 rounded-lg text-foreground focus:outline-none focus:border-accent"
                >
                  <option value="">Select...</option>
                  <option value="1">Under 1%</option>
                  <option value="2">1-3%</option>
                  <option value="5">3-7%</option>
                  <option value="10">7-15%</option>
                  <option value="20">15%+</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 px-6 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 text-lg"
            >
              Calculate My ROI <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-muted text-center mt-4">
              Your information is used only to calculate your ROI estimate. We don&apos;t store these inputs.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
