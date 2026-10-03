export type MessageRole = 'parent' | 'learner' | 'system' | 'counsellor';

export interface ChatMessageData {
  id: string;
  role: MessageRole;
  content: string;
  contentHi?: string;
  timestamp: string;
  evidenceIds?: string[];
  isTyping?: boolean;
}

export interface Concern {
  id: string;
  name: string;
  nameHi: string;
  description: string;
  descriptionHi: string;
  icon: string;
  severity?: 'high' | 'medium' | 'low';
}

export interface CareerPathNode {
  id: string;
  stage: string;
  stageHi: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  duration?: string;
  nsqfLevel?: number;
  nextStages: string[];
  isOptional?: boolean;
}

export interface CareerScenario {
  id: string;
  question: string;
  questionHi: string;
  description: string;
  descriptionHi: string;
  steps: { title: string; titleHi: string; description: string; descriptionHi: string }[];
  tradeId: string;
}

export interface Counsellor {
  id: string;
  name: string;
  languages: string[];
  specialization: string;
  availability: string;
  experience: string;
}

export interface CounsellingCase {
  id: string;
  sessionId: string;
  trade: string;
  location: string;
  primaryConcern: string;
  status: 'active' | 'pending' | 'resolved';
  familyContext: string;
  conversationSummary: string;
  evidenceViewed: string[];
  unresolvedQuestion: string;
}
