"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Mail, Loader2, Lock } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"

export default function SignIn() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const base = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000"
      const res = await fetch(`${base}/api/auth/sign-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      console.debug("sign-in: server response:", data)

      if (data.success) {
        if (!data.token) throw new Error("No token returned from server")
        if (!data.user) throw new Error("No user returned from server")

        try {
          localStorage.setItem("token", data.token)
          localStorage.setItem("user", JSON.stringify(data.user))
          console.debug("sign-in: token and user saved to localStorage")
        } catch (err) {
          console.error("sign-in: failed to save token/user to localStorage", err)
          toast.error("Failed to save session. Check browser settings.")
          setLoading(false)
          return
        }

        toast.success("Signed in successfully!")
        setTimeout(() => router.push("/dashboard"), 800)
      } else {
        toast.error(data.message || "Failed to sign in")
        console.warn("sign-in: server returned failure", data)
      }
    } catch (err) {
      console.error("sign-in: request failed", err)
      toast.error("Failed to sign in. Check your network or credentials.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-background text-foreground min-h-screen flex items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="w-full max-w-md bg-card border border-border rounded-xl p-8 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to continue</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full bg-background border border-border rounded-lg pl-10 pr-2 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="text-center text-muted-foreground text-sm mt-6">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-primary hover:underline font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  )
}
