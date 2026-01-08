import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/language-context"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ui",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Political BuZZ - India's Most Trusted Political Campaign Agency | Data-Driven Election Strategies",
  description:
    "Professional political campaign services for all parties across India. 500+ winning campaigns. Expert digital marketing, PR, field operations & election software. Call +917058253695",
  keywords:
    "political campaign agency India, election campaign management, digital political marketing, political consulting India, municipal election campaign, gram panchayat election, MLA campaign strategy, political PR services, election software India, campaign management company",
  openGraph: {
    title: "Political BuZZ — Data × Design × Delivery",
    description: "Full-stack political campaigns from booth to browser. 500+ campaigns since 2008.",
    type: "website",
    url: "https://www.politicalbuzzindia.in",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
