import type {
  AnalyticsSummary,
  ConcernDistribution,
  ConcernShift,
  ResolutionData,
  DistrictInsight,
  TradeInsight,
  InsightCard,
} from '../types/analytics';

export const analyticsSummary: AnalyticsSummary = {
  familiesCounselled: 247,
  sessionsResolved: 189,
  humanEscalations: 34,
  unresolvedConcerns: 24,
};

export const concernDistribution: ConcernDistribution[] = [
  { concern: 'Income & Earnings', count: 89, percentage: 36 },
  { concern: 'Job Security', count: 52, percentage: 21 },
  { concern: 'Migration', count: 37, percentage: 15 },
  { concern: 'Career Growth', count: 29, percentage: 12 },
  { concern: 'Safety', count: 19, percentage: 8 },
  { concern: 'Social Perception', count: 12, percentage: 5 },
  { concern: 'Training Quality', count: 9, percentage: 3 },
];

export const concernShift: ConcernShift[] = [
  { concern: 'Income', before: 89, after: 34 },
  { concern: 'Job Security', before: 52, after: 22 },
  { concern: 'Migration', before: 37, after: 18 },
  { concern: 'Career Growth', before: 29, after: 8 },
  { concern: 'Safety', before: 19, after: 11 },
  { concern: 'Social Perception', before: 12, after: 9 },
];

export const resolutionData: ResolutionData[] = [
  { label: 'Resolved', value: 189, color: '#38795C' },
  { label: 'Escalated', value: 34, color: '#A87627' },
  { label: 'Unresolved', value: 24, color: '#A84E47' },
];

export const districtInsights: DistrictInsight[] = [
  { district: 'Jaipur', state: 'Rajasthan', topConcern: 'Income & Earnings', resolutionRate: 78, escalationRate: 12 },
  { district: 'Ahmedabad', state: 'Gujarat', topConcern: 'Job Security', resolutionRate: 82, escalationRate: 9 },
  { district: 'Lucknow', state: 'Uttar Pradesh', topConcern: 'Migration', resolutionRate: 71, escalationRate: 18 },
  { district: 'Pune', state: 'Maharashtra', topConcern: 'Career Growth', resolutionRate: 85, escalationRate: 7 },
  { district: 'Bengaluru', state: 'Karnataka', topConcern: 'Income & Earnings', resolutionRate: 88, escalationRate: 6 },
];

export const tradeInsights: TradeInsight[] = [
  { trade: 'Electrician', primaryConcern: 'Income & Earnings', evidenceAvailability: 'Medium', escalationRate: 14 },
  { trade: 'CNC Operator', primaryConcern: 'Job Security', evidenceAvailability: 'Medium', escalationRate: 11 },
  { trade: 'Solar Technician', primaryConcern: 'Career Growth', evidenceAvailability: 'Low', escalationRate: 22 },
  { trade: 'Welder', primaryConcern: 'Safety', evidenceAvailability: 'Medium', escalationRate: 16 },
  { trade: 'Healthcare Assistant', primaryConcern: 'Migration', evidenceAvailability: 'Medium', escalationRate: 13 },
  { trade: 'IT Support', primaryConcern: 'Income & Earnings', evidenceAvailability: 'High', escalationRate: 8 },
];

export const insightCards: InsightCard[] = [
  {
    id: 'insight-1',
    text: 'Income concern is the dominant concern in the selected demo districts.',
    textHi: 'चुने गए डेमो जिलों में आय संबंधी चिंता प्रमुख चिंता है।',
    category: 'Income',
  },
  {
    id: 'insight-2',
    text: 'Migration concern appears frequently in trades requiring relocation.',
    textHi: 'स्थानांतरण की आवश्यकता वाले ट्रेडों में प्रवास संबंधी चिंता बार-बार दिखाई देती है।',
    category: 'Migration',
  },
  {
    id: 'insight-3',
    text: 'Evidence gaps are concentrated in selected trade-location combinations.',
    textHi: 'साक्ष्य अंतराल चुने गए ट्रेड-स्थान संयोजनों में केंद्रित हैं।',
    category: 'Evidence',
  },
];
