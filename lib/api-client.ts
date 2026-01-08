const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

class ApiClient {
    private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            ...options,
        })

        if (!response.ok) {
            const error = await response.json().catch(() => ({ error: 'Request failed' }))
            throw new Error(error.error || 'Request failed')
        }

        const data = await response.json()
        return data.data
    }

    // Cities
    async getCities() {
        return this.request('/cities')
    }

    async getWards(cityId: string) {
        return this.request(`/cities/${cityId}/wards`)
    }

    // Parties
    async getParties() {
        return this.request('/parties')
    }

    // Representatives
    async getRepresentatives(params?: {
        cityId?: string
        wardId?: string
        partyId?: string
    }) {
        const searchParams = new URLSearchParams()
        if (params?.cityId) searchParams.append('cityId', params.cityId)
        if (params?.wardId) searchParams.append('wardId', params.wardId)
        if (params?.partyId) searchParams.append('partyId', params.partyId)

        const query = searchParams.toString()
        return this.request(`/representatives${query ? `?${query}` : ''}`)
    }

    async getRepresentative(id: string) {
        return this.request(`/representatives/${id}`)
    }

    // Analytics
    async getAnalytics(type: 'city' | 'ward' | 'party', id: string) {
        return this.request(`/analytics?type=${type}&id=${id}`)
    }
}

export const api = new ApiClient()
