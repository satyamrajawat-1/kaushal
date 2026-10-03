export interface Trade {
  id: string;
  name: string;
  nameHi: string;
  description: string;
  descriptionHi: string;
  nsqfLevel: number;
  duration: string;
  sector: string;
  jobRoles: string[];
  interests: string[];
  evidenceAvailability: 'high' | 'medium' | 'low';
  minEducation?: string;
}

export interface TrainingProvider {
  id: string;
  name: string;
  tradeIds: string[];
  district: string;
  state: string;
  type: 'ITI' | 'Private' | 'NSDC' | 'Government';
  rating?: number;
  placementSupport: boolean;
}
