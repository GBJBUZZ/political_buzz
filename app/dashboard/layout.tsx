"use client"

import { useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import {
    LayoutDashboard,
    UserCircle,
    MessageSquare,
    TrendingUp,
    Settings,
    LogOut,
    Bell,
    ShieldCheck,
    ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: session, status } = useSession()
    const router = useRouter()
    const pathname = usePathname()

    if (status === "loading") {
        return (
            <div className="min-h-screen bg-[#000629] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    if (status === "unauthenticated") {
        router.push("/login")
        return null
    }

    const menuItems = [
        { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
        { name: "Public Profile", icon: UserCircle, href: "/dashboard/profile" },
        { name: "Ward Issues", icon: MessageSquare, href: "/dashboard/issues", count: 12 },
        { name: "Reach Analytics", icon: TrendingUp, href: "/dashboard/analytics" },
        { name: "Settings", icon: Settings, href: "/dashboard/settings" },
    ]

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 bottom-0 w-72 bg-[#000629] text-white z-50 hidden lg:flex flex-col">
                <div className="p-8">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <ShieldCheck className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h1 className="font-black text-lg tracking-tighter leading-none">POLITICAL</h1>
                            <p className="text-[10px] font-black text-blue-400 tracking-[0.3em]">CONNECT</p>
                        </div>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all group ${isActive
                                        ? "bg-blue-600 text-white shadow-xl shadow-blue-900/40"
                                        : "text-blue-200/60 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <item.icon className={`h-5 w-5 ${isActive ? "text-white" : "group-hover:text-blue-400"} transition-colors`} />
                                    <span className="text-sm font-bold tracking-tight">{item.name}</span>
                                </div>
                                {item.count && (
                                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${isActive ? "bg-white text-blue-600" : "bg-blue-500/20 text-blue-400"}`}>
                                        {item.count}
                                    </span>
                                )}
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 mt-auto">
                    <div className="bg-white/5 rounded-3xl p-6 border border-white/10 mb-6">
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3">Verification ID</p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 flex items-center justify-center text-[10px] font-black">L1</div>
                            <div>
                                <p className="text-xs font-bold">NMC-REP-882</p>
                                <p className="text-[10px] text-green-400 font-bold">Verified Active</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => signOut()}
                        className="w-full flex items-center gap-4 px-4 py-3.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-2xl transition-all group"
                    >
                        <LogOut className="h-5 w-5" />
                        <span className="text-sm font-bold">Logout Session</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:ml-72 min-h-screen">
                {/* Top Header */}
                <header className="h-20 bg-white border-b border-slate-200 sticky top-0 z-40 px-8 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-black text-slate-900 tracking-tight">
                            Welcome back, {session?.user?.name?.split(' ')[0]}
                        </h2>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Nagpur Municipal Corporation • Ward 1</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-100 transition-colors">
                            <Bell className="h-5 w-5 text-slate-600" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white shadow-sm" />
                        </button>
                        <div className="h-10 w-px bg-slate-200 origin-center" />
                        <div className="flex items-center gap-4">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-900 leading-none mb-1">{session?.user?.name}</p>
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none">Representative Member</p>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-xl shadow-blue-500/20">
                                {session?.user?.name?.[0] || 'U'}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
