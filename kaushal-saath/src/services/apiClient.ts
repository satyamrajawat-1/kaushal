const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await response.json();
  
  if (!response.ok || data.success === false) {
    throw new Error(data.error?.message || response.statusText || 'API Error');
  }
  
  return data.data;
}

export const apiClient = {
  // Trades
  getTrades: () => fetchApi<any[]>('/trades'),
  getTrade: (id: string) => fetchApi<any>(`/trades/${id}`),
  
  // Evidence
  getEvidence: (tradeId: string) => fetchApi<any[]>(`/trades/${tradeId}/evidence`),
  
  // Career Paths
  getCareerPath: (tradeId: string) => fetchApi<any>(`/trades/${tradeId}/career-path`),
  
  // Providers & Opportunities
  getProviders: (tradeId?: string) => fetchApi<any[]>(`/trades/${tradeId ? `${tradeId}/` : ''}providers`),
  getLocalOpportunities: (state: string, tradeId: string) => 
    fetchApi<any>(`/opportunities?state=${encodeURIComponent(state)}&trade=${encodeURIComponent(tradeId)}`),

  // Scenarios
  getScenarios: (tradeId: string) => fetchApi<any[]>(`/trades/${tradeId}/scenarios`),

  // Counselling / Chat
  // Counselling / Chat
  sendCounsellingMessage: async (message: string, role: string, tradeId: string, concernIds: string[]) => {
    const res = await fetchApi<any>('/counselling/message', {
      method: 'POST',
      body: JSON.stringify({ message, sender_type: role, trade_id: tradeId, concern_ids: concernIds })
    });
    return {
      id: `msg-${Date.now()}`,
      role: 'system',
      content: res.message || res.text || 'Received response',
      timestamp: new Date().toISOString(),
      evidenceIncluded: !!res.evidence?.length,
    };
  },

  // Admin Analytics
  getAdminOverview: () => fetchApi<any>('/admin/overview'),
  getConcernDistribution: () => fetchApi<any[]>('/admin/concerns/distribution'),
  getConcernShift: () => fetchApi<any[]>('/admin/concerns/shift'),
  getResolutionData: () => fetchApi<any[]>('/admin/resolutions'),
  getDistrictInsights: () => fetchApi<any[]>('/admin/districts'),
  getTradeInsights: () => fetchApi<any[]>('/admin/trades'),
  
  // Counsellors
  getCounsellors: () => fetchApi<any[]>('/counsellors'),
  getCounsellingCases: () => fetchApi<any[]>('/counsellor/cases'),
};
