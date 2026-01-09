"use client"

import { useState } from 'react'
import Link from 'next/link'
import {
    LayoutDashboard,
    UserCheck,
    ShieldAlert,
    BarChart3,
    Settings,
    LogOut,
    Menu,
    X,
    Bell,
    Globe
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useSession, signOut } from "next-auth/react"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: session } = useSession()
    const [isSidebarOpen, setSidebarOpen] = useState(true)

    const menuItems = [
        { icon: LayoutDashboard, label: 'Global Overview', href: '/admin' },
        { icon: UserCheck, label: 'Verifications', href: '/admin/verifications' },
        { icon: ShieldAlert, label: 'Critical Issues', href: '/admin/issues' },
        { icon: BarChart3, label: 'Party Analytics', href: '/admin/parties' },
        { icon: Globe, label: 'Ward Management', href: '/admin/wards' },
    ]

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex font-sans">
            {/* Sidebar */}
            <aside className={`${isSidebarOpen ? 'w-72' : 'w-20'} bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col fixed h-full z-50`}>
                <div className="p-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <ShieldAlert className="h-6 w-6" />
                    </div>
                    {isSidebarOpen && (
                        <div className="animate-in fade-in duration-500">
                            <h1 className="text-white font-black tracking-tight leading-none text-lg">Buzz Admin</h1>
                            <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mt-1">Command Center</p>
                        </div>
                    )}
                </div>

                <nav className="flex-1 px-4 mt-6 space-y-2">
                    {menuItems.map((item) => (
                        <Link key={item.label} href={item.href}>
                            <div className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all group hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer mb-1">
                                <item.icon className="h-5 w-5 flex-shrink-0" />
                                {isSidebarOpen && <span className="text-sm font-bold">{item.label}</span>}
                            </div>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <Button
                        variant="ghost"
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="w-full flex items-center justify-start gap-4 px-4 py-3 rounded-xl hover:bg-red-500/10 hover:text-red-500 text-slate-400 border-none transition-all"
                    >
                        <LogOut className="h-5 w-5 flex-shrink-0" />
                        {isSidebarOpen && <span className="text-sm font-bold">Sign Out</span>}
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`${isSidebarOpen ? 'ml-72' : 'ml-20'} flex-1 flex flex-col transition-all duration-300 min-w-0`}>
                {/* Header */}
                <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40 shadow-sm">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500">
                            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                        <div>
                            <h2 className="text-sm font-black text-slate-900 uppercase tracking-tight">Nagpur Command Hub</h2>
                            <p className="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-widest mt-0.5">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                Central Intelligence Node
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative p-2 hover:bg-slate-100 rounded-xl text-slate-500 transition-all">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                            <div className="text-right hidden sm:block">
                                <p className="text-xs font-black text-slate-900 leading-none mb-1">{session?.user?.name || 'Administrator'}</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Admin</p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white text-xs font-black">
                                AD
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-8 max-w-[1600px] mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    )
}
