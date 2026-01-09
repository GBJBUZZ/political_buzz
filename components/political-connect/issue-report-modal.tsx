"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, Loader2, MapPin } from "lucide-react"

export function IssueReportModal({ cities, onSuccess }: { cities: any[], onSuccess: () => void }) {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        cityId: "",
        wardId: "",
    })

    // Derived wards based on selected city
    // In real app, we fetch wards for city. For now assume passed cities have _count or we handle it.
    // Actually, the main page has 'cities', but we need wards.
    // We'll simplify: User selects City -> Ward Input (Manual or Dropdown if available). 
    // Ideally, we fetch Wards when City selected.

    const [wards, setWards] = useState<any[]>([])
    const nagpurId = 'nagpur-city' // From seed

    // Load Wards on open
    const loadWards = async () => {
        try {
            const res = await fetch(`/api/cities/${nagpurId}/wards`)
            const data = await res.json()
            if (data.success) setWards(data.data)
        } catch (e) { console.error(e) }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch('/api/issues', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    cityId: nagpurId
                })
            })
            if (res.ok) {
                setOpen(false)
                setFormData({ title: "", description: "", category: "", cityId: nagpurId, wardId: "" })
                onSuccess()
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={(val) => {
            setOpen(val)
            if (val) loadWards()
        }}>
            <DialogTrigger asChild>
                <div className="flex flex-col items-center gap-3">
                    <Button className="w-16 h-16 rounded-2xl bg-red-600 hover:bg-red-700 text-white shadow-2xl shadow-red-500/40 p-0 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group">
                        <Camera className="h-8 w-8 group-hover:rotate-12 transition-transform" />
                    </Button>
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Post Issue</span>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px] bg-white rounded-[2.5rem] p-0 overflow-hidden border-none shadow-2xl">
                <div className="bg-red-600 p-8 text-white relative">
                    <DialogTitle className="text-2xl font-black tracking-tight mb-2">Report Civic Issue</DialogTitle>
                    <p className="text-red-100 text-xs font-bold uppercase tracking-widest opacity-80">Nagpur Municipal Corporation • Ward Connect</p>
                    <div className="absolute -bottom-6 right-8 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="space-y-4">
                        <div className="grid gap-2">
                            <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Location Details</Label>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 text-sm font-bold text-gray-500 flex items-center gap-2">
                                    <MapPin className="h-3 w-3" /> Nagpur (Core)
                                </div>
                                <Select onValueChange={(val) => setFormData({ ...formData, wardId: val })}>
                                    <SelectTrigger className="h-12 rounded-xl border-gray-100 bg-gray-50 font-bold">
                                        <SelectValue placeholder="Select Ward" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-none shadow-2xl">
                                        {wards.map((w: any) => (
                                            <SelectItem key={w.id} value={w.id} className="font-bold py-3">Ward {w.wardNumber}: {w.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Issue Category</Label>
                            <Select onValueChange={(val) => setFormData({ ...formData, category: val })}>
                                <SelectTrigger className="h-12 rounded-xl border-gray-100 bg-white shadow-sm font-bold">
                                    <SelectValue placeholder="What is the problem?" />
                                </SelectTrigger>
                                <SelectContent className="rounded-2xl border-none shadow-2xl">
                                    <SelectItem value="roads" className="font-bold py-3">🛣️ Roads & Potholes</SelectItem>
                                    <SelectItem value="water" className="font-bold py-3">💧 Water Supply</SelectItem>
                                    <SelectItem value="garbage" className="font-bold py-3">🗑️ Garbage / Sanitation</SelectItem>
                                    <SelectItem value="electricity" className="font-bold py-3">💡 Street Lights / Electricity</SelectItem>
                                    <SelectItem value="other" className="font-bold py-3">📁 Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Short Headline</Label>
                            <Input
                                placeholder="e.g. Broken pipeline in Sector 4"
                                value={formData.title}
                                className="h-12 rounded-xl border-gray-100 font-bold focus:ring-red-500/20"
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Detailed Description</Label>
                            <Textarea
                                placeholder="Explain the situation briefly..."
                                value={formData.description}
                                className="min-h-[100px] rounded-2xl border-gray-100 font-medium p-4 focus:ring-red-500/20"
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="flex-1 h-12 rounded-xl font-bold text-gray-400">Cancel</Button>
                        <Button type="submit" className="flex-[2] h-12 rounded-xl bg-red-600 hover:bg-red-700 font-black shadow-xl shadow-red-500/20 uppercase tracking-widest" disabled={loading || !formData.wardId}>
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Submit to Hub
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
