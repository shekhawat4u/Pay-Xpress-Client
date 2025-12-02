"use client"

import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img src="/Pay_Express_01.png" alt="Pay Xpress" className="h-8 w-auto" />
          </a>


          <div className="flex gap-4 items-center">
           

            <Link
              href="/sign-in"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Auth container */}
      <div className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-xl">
          {children}
        </div>
      </div>


      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>© 2025 Pay Xpress. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
