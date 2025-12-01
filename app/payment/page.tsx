"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import PaymentForm from "@/components/payment-form"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function PaymentPage() {
  const router = useRouter()
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handlePaymentSuccess = (orderId: string) => {
    setStatus("success")
    setMessage(`Payment successful! Order ID: ${orderId}`)
    setTimeout(() => {
      router.push(`/dashboard?transaction=${orderId}`)
    }, 2000)
  }

  const handlePaymentError = (error: string) => {
    setStatus("error")
    setMessage(error)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div
            onClick={() => router.push("/")}
            className="text-2xl font-bold text-primary cursor-pointer hover:opacity-80 transition"
          >
            Orion-Pay
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Make a Payment</h1>

        {/* Status Messages */}
        {status === "success" && (
          <div className="bg-secondary/20 border border-secondary rounded-lg p-4 mb-8 flex items-center gap-3">
            <CheckCircle className="text-secondary" size={24} />
            <div>
              <p className="font-semibold">Success!</p>
              <p className="text-sm text-muted-foreground">{message}</p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="bg-destructive/20 border border-destructive rounded-lg p-4 mb-8 flex items-center gap-3">
            <AlertCircle className="text-destructive" size={24} />
            <div>
              <p className="font-semibold">Error</p>
              <p className="text-sm text-muted-foreground">{message}</p>
            </div>
          </div>
        )}

        {/* Payment Form */}
        <PaymentForm onSuccess={handlePaymentSuccess} onError={handlePaymentError} />
      </div>
    </main>
  )
}
