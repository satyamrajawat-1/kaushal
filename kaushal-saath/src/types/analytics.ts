export interface AnalyticsSummary {
  familiesCounselled: number;
  sessionsResolved: number;
  humanEscalations: number;
  unresolvedConcerns: number;
}

export interface ConcernDistribution {
  concern: string;
  count: number;
  percentage: number;
}

export interface ConcernShift {
  concern: string;
  before: number;
  after: number;
}

export interface ResolutionData {
  label: string;
  value: number;
  color: string;
}

export interface DistrictInsight {
  district: string;
  state: string;
  topConcern: string;
  resolutionRate: number;
  escalationRate: number;
}

export interface TradeInsight {
  trade: string;
  primaryConcern: string;
  evidenceAvailability: string;
  escalationRate: number;
}

export interface InsightCard {
  id: string;
  text: string;
  textHi: string;
  category: string;
}
