export type VerificationStatus = 'verified' | 'estimated' | 'limited' | 'unavailable';
export type ConfidenceLevel = 'high' | 'medium' | 'low';

export interface EvidenceRecord {
  id: string;
  metric: string;
  metricHi: string;
  value: string;
  unit?: string;
  tradeId: string;
  region: string;
  district?: string;
  source: string;
  sourceType: string;
  dataPeriod: string;
  sampleSize?: number;
  verificationStatus: VerificationStatus;
  confidence: ConfidenceLevel;
  lastUpdated: string;
}

export interface EvidenceFallback {
  district: VerificationStatus;
  state: VerificationStatus;
  national: VerificationStatus;
}
