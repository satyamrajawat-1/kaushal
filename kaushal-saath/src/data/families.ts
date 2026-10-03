import type { FamilySession } from '../types/family';

export const defaultFamilySession: FamilySession = {
  id: 'FAM-2025-DEMO',
  learner: {
    education: '10th Pass',
    interests: ['Electronics', 'Problem solving'],
    careerGoal: 'Become an electrician',
  },
  family: {
    householdIncomeBracket: '₹10,000 – ₹20,000',
    preferredTravelDistance: 'Within District',
    migrationPreference: 'Prefer local',
  },
  location: {
    state: 'Rajasthan',
    district: 'Jaipur',
  },
  language: 'en',
  selectedConcerns: [],
  selectedTradeId: null,
  status: 'onboarding',
  createdAt: new Date().toISOString(),
};
