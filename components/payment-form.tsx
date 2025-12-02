"use client"

import type React from "react"

import { useState } from "react"
import { AlertCircle } from "lucide-react"

interface PaymentFormProps {
  onSuccess: (orderId: string) => void
  onError: (error: string) => void
}

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function PaymentForm({ onSuccess, onError }: PaymentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    description: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.amount) {
        throw new Error("Please fill in all required fields")
      }

      if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
        throw new Error("Please enter a valid amount")
      }

      // Create order
      const orderRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Number(formData.amount),
          currency: "INR",
          description: formData.description,
          notes: {
            name: formData.name,
            email: formData.email,
          },
        }),
      })

      const orderData = await orderRes.json()
      if (!orderData.success) {
        throw new Error(orderData.message)
      }

      // Load Razorpay script
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.async = true
      script.onload = () => {
        const razorpay = new window.Razorpay({
          key: orderData.data.key_id,
          order_id: orderData.data.order_id,
          amount: orderData.data.amount,
          currency: orderData.data.currency,
          name: "Pay Xpress",
          description: formData.description,
          prefill: {
            name: formData.name,
            email: formData.email,
          },
          handler: async (response: any) => {
            try {
              // Verify payment
              const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments/verify-payment`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(response),
              })

              const verifyData = await verifyRes.json()
              if (verifyData.success) {
                onSuccess(orderData.data.order_id)
              } else {
                onError(verifyData.message)
              }
            } catch (err: any) {
              onError(err.message)
            }
          },
          modal: {
            ondismiss: () => {
              onError("Payment cancelled")
            },
          },
        })
        razorpay.open()
      }
      document.body.appendChild(script)
    } catch (err: any) {
      setError(err.message)
      onError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 max-w-md mx-auto">
      {error && (
        <div className="bg-destructive/20 border border-destructive rounded-lg p-4 mb-6 flex items-center gap-3">
          <AlertCircle className="text-destructive" size={20} />
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Amount (INR) *</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="500"
            step="0.01"
            min="1"
            required
            className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Order description..."
            className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none h-24"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </form>
  )
}
