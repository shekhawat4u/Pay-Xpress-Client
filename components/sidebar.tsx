"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import {
  LayoutDashboard,
  ArrowRightLeft,
  DollarSign,
  Send,
  TrendingUp,
  Download,
  Code,
  BookOpen,
  User,
  HelpCircle,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: ArrowRightLeft, label: "Transactions", href: "/transactions" },
  { icon: DollarSign, label: "Pay In", href: "/pay-in" },
  { icon: Send, label: "Pay Out", href: "/pay-out" },
  { icon: TrendingUp, label: "Settlement", href: "/settlement" },
  { icon: Download, label: "Export", href: "/export" },
  { icon: Code, label: "Payment API", href: "/payment-api" },
  { icon: BookOpen, label: "API Documentation", href: "/api-docs" },
];

const bottomItems = [
  { icon: User, label: "Account", href: "/account" },
  { icon: HelpCircle, label: "Support", href: "/support" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logged out successfully!");
      setTimeout(() => router.push("/"), 500);
    } catch (e) {
      toast.error("Logout failed!");
      router.push("/");
    }
  }

  return (
    <div className="w-64 bg-card border-r border-border min-h-screen flex flex-col sticky top-0">
      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Logo */}
      <Link href="/" className="px-6 py-8 border-b border-border flex items-center gap-3">
        <img src="/Pay_Express_01.png" alt="Pay Xpress" className="h-8 w-auto" />
      </Link>

      {/* Main Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive ? "bg-primary text-white" : "text-foreground hover:bg-muted"
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Menu */}
      <div className="border-t border-border px-4 py-4 space-y-2">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive ? "bg-primary text-white" : "text-foreground hover:bg-muted"
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
