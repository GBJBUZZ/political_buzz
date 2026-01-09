"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function ClientLayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    // Pages that should NOT have the global header and footer
    const hideLayoutRoutes = [
        '/dashboard',
        '/admin',
        '/login',
        '/signup',
        '/claim-profile',
        '/verify-otp'
    ]

    const shouldHide = hideLayoutRoutes.some(route => pathname.startsWith(route))

    return (
        <>
            {!shouldHide && <Header />}
            {children}
            {!shouldHide && <Footer />}
        </>
    )
}
