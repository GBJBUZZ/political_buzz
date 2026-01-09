"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Shield, Lock, Mail, ArrowRight, Loader2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get("callbackUrl") || "/"

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const result = await signIn("credentials", {
                email: formData.email,
                password: formData.password,
                redirect: false,
            })

            if (result?.error) {
                setError("Invalid credentials. Please try again.")
            } else {
                router.push(callbackUrl)
                router.refresh()
            }
        } catch (error) {
            setError("An unexpected error occurred.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#000629] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px]" />

            <div className="w-full max-w-md relative z-10 animate-in fade-in zoom-in duration-500">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-2xl shadow-blue-500/20 mb-6">
                        <Shield className="h-8 w-8" />
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tight mb-2">Welcome Back</h1>
                    <p className="text-blue-200/60 font-bold uppercase text-[10px] tracking-[0.3em]">Access Your Command Center</p>
                </div>

                <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl rounded-[2.5rem] overflow-hidden">
                    <CardHeader className="pt-10 px-8 pb-4">
                        <CardTitle className="text-white text-xl font-black">Sign In</CardTitle>
                        <CardDescription className="text-blue-100/40 font-medium">Use your official credentials to continue.</CardDescription>
                    </CardHeader>
                    {error && (
                        <div className="mx-8 mt-2 p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-xs font-bold text-center">
                            {error}
                        </div>
                    )}
                    <CardContent className="px-8 pb-8 pt-4">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-3">
                                <Label className="text-blue-100/60 text-[10px] font-black uppercase tracking-widest ml-1">Email Address</Label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-400/50 group-focus-within:text-blue-400 transition-colors" />
                                    <Input
                                        type="email"
                                        placeholder="name@official.com"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="bg-white/5 border-white/10 focus:border-blue-500/50 text-white h-14 pl-12 rounded-2xl transition-all placeholder:text-blue-100/20"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between ml-1">
                                    <Label className="text-blue-100/60 text-[10px] font-black uppercase tracking-widest">Password</Label>
                                    <Link href="/forgot-password" px-4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest hover:text-blue-300">Forgot?</Link>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-400/50 group-focus-within:text-blue-400 transition-colors" />
                                    <Input
                                        type="password"
                                        placeholder="••••••••"
                                        required
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="bg-white/5 border-white/10 focus:border-blue-500/50 text-white h-14 pl-12 rounded-2xl transition-all placeholder:text-blue-100/20"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-600/20 group transition-all"
                            >
                                {isLoading ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    <>
                                        SECURE LOGIN
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="bg-white/5 px-8 py-6 border-t border-white/5 flex justify-center">
                        <p className="text-sm text-blue-100/40 font-medium">
                            First time here? <Link href="/signup" className="text-blue-400 font-bold hover:text-blue-300 ml-1">Create Account</Link>
                        </p>
                    </CardFooter>
                </Card>

                {/* Helper for demo */}
                <div className="mt-8 p-6 bg-blue-600/10 border border-blue-500/20 rounded-3xl flex gap-4 items-start animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
                    <Sparkles className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1">Demo Credentials</p>
                        <p className="text-xs text-blue-100/60 leading-relaxed font-medium">
                            Admin: admin@politicalconnect.com (adminpassword123)<br />
                            Representative credentials can be claimed via the Political Connect hub.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
