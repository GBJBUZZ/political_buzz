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

    const handleCityChange = async (cityId: string) => {
        setFormData({ ...formData, cityId, wardId: "" })
        // Fetch Wards
        try {
            const res = await fetch(`/api/cities/${cityId}/wards`)
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
                body: JSON.stringify(formData)
            })
            if (res.ok) {
                setOpen(false)
                setFormData({ title: "", description: "", category: "", cityId: "", wardId: "" })
                onSuccess()
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg gap-2">
                    <Camera className="h-4 w-4" />
                    Report Issue
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Report a Civic Issue</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">

                    <div className="grid gap-2">
                        <Label>Location</Label>
                        <Select onValueChange={handleCityChange}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select City" />
                            </SelectTrigger>
                            <SelectContent>
                                {cities.map((c: any) => (
                                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {formData.cityId && (
                            <Select onValueChange={(val) => setFormData({ ...formData, wardId: val })}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Ward" />
                                </SelectTrigger>
                                <SelectContent>
                                    {wards.map((w: any) => (
                                        <SelectItem key={w.id} value={w.id}>Ward {w.wardNumber}: {w.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    </div>

                    <div className="grid gap-2">
                        <Label>Category</Label>
                        <Select onValueChange={(val) => setFormData({ ...formData, category: val })}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="roads">Roads & Potholes</SelectItem>
                                <SelectItem value="water">Water Supply</SelectItem>
                                <SelectItem value="garabge">Garbage / Sanitation</SelectItem>
                                <SelectItem value="electricity">Street Lights / Electricity</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-2">
                        <Label>Title</Label>
                        <Input
                            placeholder="e.g. Large pothole on Main St"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label>Description</Label>
                        <Textarea
                            placeholder="Describe the issue in detail..."
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            required
                        />
                    </div>

                    <div className="flex justify-end gap-2">
                        <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit" className="bg-red-600 hover:bg-red-700" disabled={loading || !formData.wardId}>
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Submit Report
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
