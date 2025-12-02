"use client"

import { Mail, Phone, MessageSquare, ChevronRight } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "How do I get started with Pay Xpress?",
    answer:
      "Simply create an account, generate an API key from the Payment API section, and start integrating our endpoints into your application.",
  },
  {
    question: "What payment methods does Pay Xpress support?",
    answer:
      "We support all payment methods offered by Razorpay including cards, UPI, net banking, and digital wallets.",
  },
  {
    question: "How long does settlement take?",
    answer:
      "Settlements are typically processed within 24 hours. You can view your settlement history in the Settlement section.",
  },
  {
    question: "Are there transaction limits?",
    answer:
      "No, there are no transaction limits. You can process unlimited transactions. However, individual transaction limits may apply based on your payment method.",
  },
  {
    question: "How do I handle payment failures?",
    answer:
      "Payment failures are automatically tracked in your dashboard. You can retry the payment or initiate a refund through the API.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use bank-level encryption, HMAC-SHA256 signature verification, and follow all PCI DSS compliance standards.",
  },
]

export default function SupportPage() {
  return (
    <div className="p-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Support</h1>
        <p className="text-muted-foreground">Get help with Pay Xpress</p>
      </div>

      {/* Contact Methods */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-card border border-border rounded-lg p-8">
          <Mail className="text-primary mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Email Support</h3>
          <p className="text-muted-foreground mb-4">support@payxpress.com</p>
          <Link href="mailto:support@payxpress.com" className="text-primary hover:underline">
            Send Email
          </Link>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <Phone className="text-primary mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Phone Support</h3>
          <p className="text-muted-foreground mb-4">+91 1800 123 4567</p>
          <Link href="tel:+911800123456" className="text-primary hover:underline">
            Call Now
          </Link>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <MessageSquare className="text-primary mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Live Chat</h3>
          <p className="text-muted-foreground mb-4">Available 24/7</p>
          <button className="text-primary hover:underline">Start Chat</button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-card border border-border rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group border border-border rounded-lg p-6 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold hover:text-primary transition">
                {faq.question}
                <ChevronRight size={20} className="group-open:rotate-90 transition" />
              </summary>
              <p className="mt-4 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/api-docs"
            className="flex items-center justify-between p-4 rounded-lg hover:bg-primary/20 transition"
          >
            <span className="font-semibold">API Documentation</span>
            <ChevronRight size={20} />
          </Link>
          <a href="#" className="flex items-center justify-between p-4 rounded-lg hover:bg-primary/20 transition">
            <span className="font-semibold">Integration Guide</span>
            <ChevronRight size={20} />
          </a>
          <a href="#" className="flex items-center justify-between p-4 rounded-lg hover:bg-primary/20 transition">
            <span className="font-semibold">SDK Downloads</span>
            <ChevronRight size={20} />
          </a>
          <a href="#" className="flex items-center justify-between p-4 rounded-lg hover:bg-primary/20 transition">
            <span className="font-semibold">Status Page</span>
            <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
