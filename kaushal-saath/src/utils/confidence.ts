import type { ConfidenceLevel, VerificationStatus } from '../types/evidence';

export function getConfidenceLabel(c: ConfidenceLevel): string {
  const labels: Record<ConfidenceLevel, string> = {
    high: 'High',
    medium: 'Medium',
    low: 'Low',
  };
  return labels[c];
}

export function getConfidenceColor(c: ConfidenceLevel): string {
  const colors: Record<ConfidenceLevel, string> = {
    high: '#38795C',
    medium: '#A87627',
    low: '#A84E47',
  };
  return colors[c];
}

export function getVerificationLabel(v: VerificationStatus): string {
  const labels: Record<VerificationStatus, string> = {
    verified: 'Verified',
    estimated: 'Estimated',
    limited: 'Limited / Demo Data',
    unavailable: 'Unavailable',
  };
  return labels[v];
}

export function getVerificationColor(v: VerificationStatus): string {
  const colors: Record<VerificationStatus, string> = {
    verified: '#38795C',
    estimated: '#A87627',
    limited: '#A87627',
    unavailable: '#A84E47',
  };
  return colors[v];
}
