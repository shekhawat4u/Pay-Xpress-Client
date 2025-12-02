"use client"

import Link from "next/link"
import { ArrowRight, Shield, Zap, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <a href="/" className="flex items-center gap-3">
              <img src="/Pay_Express_01.png" alt="Pay Xpress" className="h-8 w-auto" />
            </a>
         
          <div className="flex gap-4 items-center">
           
            <Link href="/sign-in" className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded transition">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-balance">Secure Payment Gateway Middleware</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Pay Xpress acts as a trusted middleman between your application and Razorpay, providing a seamless payment
              experience with enterprise-grade security.
            </p>
            <div className="flex gap-4">
              <Link
                href="/payment"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition"
              >
                Start Payment <ArrowRight size={20} />
              </Link>
              <Link
                href="/dashboard"
                className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                View Dashboard
              </Link>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="text-6xl font-bold text-primary mb-4">∞</div>
            <p className="text-muted-foreground">Unlimited transaction capacity</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Pay Xpress?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Secure", desc: "Bank-level encryption and signature verification" },
              { icon: Zap, title: "Fast", desc: "Lightning-quick transaction processing" },
              { icon: BarChart3, title: "Track", desc: "Real-time transaction monitoring and analytics" },
            ].map((feature, i) => (
              <div key={i} className="bg-background border border-border p-8 rounded-lg">
                <feature.icon className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>© 2025 Pay Xpress. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
