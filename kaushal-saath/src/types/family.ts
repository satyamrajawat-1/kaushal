export interface LearnerProfile {
  education: string;
  interests: string[];
  careerGoal: string;
}

export interface FamilyContext {
  householdIncomeBracket: string;
  preferredTravelDistance: string;
  migrationPreference: string;
}

export interface LocationContext {
  state: string;
  district: string;
}

export interface FamilySession {
  id: string;
  learner: LearnerProfile;
  family: FamilyContext;
  location: LocationContext;
  language: 'en' | 'hi';
  selectedConcerns: string[];
  selectedTradeId: string | null;
  status: 'onboarding' | 'concerns' | 'counselling' | 'resolved' | 'escalated';
  createdAt: string;
}
