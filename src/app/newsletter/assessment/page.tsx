'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { ArrowRight, ArrowLeft, CheckCircle, AlertTriangle, XCircle } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: "How much time does your team spend on repetitive tasks weekly?",
    options: [
      { value: 1, label: "Less than 5 hours", score: 10 },
      { value: 2, label: "5-15 hours", score: 25 },
      { value: 3, label: "15-30 hours", score: 50 },
      { value: 4, label: "30+ hours", score: 75 },
    ],
  },
  {
    id: 2,
    question: "Do you have documented processes that could be automated?",
    options: [
      { value: 1, label: "No documented processes", score: 20 },
      { value: 2, label: "Some processes documented", score: 40 },
      { value: 3, label: "Most processes documented", score: 60 },
      { value: 4, label: "Fully documented SOPs", score: 80 },
    ],
  },
  {
    id: 3,
    question: "How are you currently using AI in your business?",
    options: [
      { value: 1, label: "Not at all", score: 80 },
      { value: 2, label: "Basic tools (ChatGPT, etc.)", score: 60 },
      { value: 3, label: "Some custom implementations", score: 40 },
      { value: 4, label: "Fully integrated AI systems", score: 20 },
    ],
  },
  {
    id: 4,
    question: "What's your biggest operational challenge?",
    options: [
      { value: 1, label: "Scaling without hiring", score: 70 },
      { value: 2, label: "Customer service response time", score: 65 },
      { value: 3, label: "Data analysis and insights", score: 60 },
      { value: 4, label: "Sales and lead generation", score: 75 },
    ],
  },
  {
    id: 5,
    question: "What's your annual revenue range?",
    options: [
      { value: 1, label: "Under $500K", score: 30 },
      { value: 2, label: "$500K - $2M", score: 50 },
      { value: 3, label: "$2M - $10M", score: 70 },
      { value: 4, label: "$10M+", score: 90 },
    ],
  },
]

function getScoreCategory(score: number) {
  if (score >= 280) return { level: 'high', label: 'High Opportunity', color: 'text-green-500', icon: CheckCircle }
  if (score >= 200) return { level: 'medium', label: 'Moderate Opportunity', color: 'text-yellow-500', icon: AlertTriangle }
  return { level: 'low', label: 'Limited Opportunity', color: 'text-red-500', icon: XCircle }
}

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }))
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 300)
    } else {
      setTimeout(() => setShowResults(true), 300)
    }
  }

  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0)
  const category = getScoreCategory(totalScore)
  const CategoryIcon = category.icon

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResults) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-primary py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-secondary/50 border border-muted/20 rounded-xl p-8 mb-8">
              <div className="text-center mb-8">
                <CategoryIcon className={`w-16 h-16 ${category.color} mx-auto mb-4`} />
                <h1 className="text-3xl font-serif text-foreground mb-2">
                  Your AI Readiness Score
                </h1>
                <div className="text-6xl font-bold text-accent mb-2">{totalScore}</div>
                <p className={`text-lg font-semibold ${category.color}`}>{category.label}</p>
              </div>

              <div className="bg-primary/50 rounded-lg p-6 mb-6">
                <h3 className="text-foreground font-semibold mb-4">What This Means:</h3>
                {category.level === 'high' && (
                  <div className="text-muted space-y-3">
                    <p>
                      <strong className="text-foreground">Excellent news!</strong> Your business has significant untapped AI potential. Based on your answers, you could likely see substantial ROI from strategic AI implementation.
                    </p>
                    <p>
                      Businesses with similar profiles have achieved 3-5x efficiency gains and added 6-7 figures in revenue through targeted automation.
                    </p>
                  </div>
                )}
                {category.level === 'medium' && (
                  <div className="text-muted space-y-3">
                    <p>
                      <strong className="text-foreground">Good potential!</strong> Your business has room for AI-driven improvements, particularly in the areas you highlighted.
                    </p>
                    <p>
                      With the right strategy, you could unlock significant time and cost savings while positioning for scale.
                    </p>
                  </div>
                )}
                {category.level === 'low' && (
                  <div className="text-muted space-y-3">
                    <p>
                      <strong className="text-foreground">Foundation stage.</strong> Your business may benefit from establishing core processes before major AI implementation.
                    </p>
                    <p>
                      However, there are still targeted AI tools that could provide quick wins and prepare you for larger transformations.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
                <h3 className="text-accent font-semibold mb-2">Recommended Next Step</h3>
                <p className="text-muted mb-4">
                  Get a personalized AI strategy session to identify your biggest opportunities and create an implementation roadmap.
                </p>
                <a 
                  href="/#apply"
                  className="inline-block w-full text-center px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Apply for Strategy Session →
                </a>
              </div>
            </div>

            <div className="bg-secondary/50 border border-muted/20 rounded-xl p-8">
              <h3 className="text-xl font-serif text-foreground mb-4 text-center">
                Want More Insights Like This?
              </h3>
              <NewsletterSignup variant="inline" source="assessment-results" />
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const question = questions[currentQuestion]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-primary py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="bg-secondary/50 border border-muted/20 rounded-xl p-8">
            <h1 className="text-2xl font-serif text-foreground mb-8">
              {question.question}
            </h1>

            <div className="space-y-3">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(question.id, option.score)}
                  className={`w-full text-left px-6 py-4 rounded-lg border transition-all ${
                    answers[question.id] === option.score
                      ? 'bg-accent/20 border-accent text-foreground'
                      : 'bg-primary/50 border-muted/30 text-muted hover:border-accent/50 hover:text-foreground'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {currentQuestion > 0 && (
              <button
                onClick={() => setCurrentQuestion(prev => prev - 1)}
                className="mt-6 flex items-center gap-2 text-muted hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous question
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
