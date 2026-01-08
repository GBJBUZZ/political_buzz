"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/packages" },
    { label: "Social Connect", href: "/social-connect" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "h-14 bg-[#000629]/95 backdrop-blur-lg shadow-lg" : "h-16 bg-[#000629]"
        }`}
    >
      <div className="container mx-auto px-4 h-full max-w-[1400px]">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Political BuZZ"
              width={160}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-xs font-semibold text-white hover:text-[#FFCF45] transition-colors rounded-lg hover:bg-[#3377FF]/20"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="bg-transparent border border-[#3377FF] text-white hover:bg-[#3377FF] hover:text-white h-9 px-4 text-xs font-semibold"
            >
              <Link href="/login">Login</Link>
            </Button>

            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-[#3377FF] to-[#72E9CD] hover:from-[#3377FF]/90 hover:to-[#72E9CD]/90 text-white h-9 px-4 text-xs font-semibold"
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-[#000629] border-[#3377FF]">
              <nav className="flex flex-col space-y-1 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-sm font-semibold text-white hover:text-[#FFCF45] hover:bg-[#3377FF]/20 transition-colors rounded-lg"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="pt-4 space-y-2 border-t border-[#3377FF]/30 mt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full bg-transparent border border-[#3377FF] text-white hover:bg-[#3377FF] hover:text-white h-11"
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[#3377FF] to-[#72E9CD] text-white h-11"
                  >
                    <Link href="/signup">Sign Up Free</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
