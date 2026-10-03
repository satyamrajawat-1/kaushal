import type { Counsellor, CounsellingCase } from '../types/counselling';

export const counsellors: Counsellor[] = [
  {
    id: 'coun-1',
    name: 'Priya Sharma',
    languages: ['Hindi', 'English'],
    specialization: 'Electrical & Manufacturing Trades',
    availability: 'Mon–Fri, 10 AM – 6 PM',
    experience: '8 years in vocational counselling',
  },
  {
    id: 'coun-2',
    name: 'Rajesh Kumar',
    languages: ['Hindi', 'English', 'Gujarati'],
    specialization: 'Healthcare & IT Trades',
    availability: 'Mon–Sat, 9 AM – 5 PM',
    experience: '12 years in career guidance',
  },
  {
    id: 'coun-3',
    name: 'Ananya Deshpande',
    languages: ['Marathi', 'Hindi', 'English'],
    specialization: 'Women in Vocational Careers',
    availability: 'Tue–Sat, 11 AM – 7 PM',
    experience: '6 years in skill development',
  },
];

export const counsellingCases: CounsellingCase[] = [
  {
    id: 'case-001',
    sessionId: 'FAM-2025-0042',
    trade: 'Electrician',
    location: 'Jaipur, Rajasthan',
    primaryConcern: 'Income & Earnings',
    status: 'active',
    familyContext: 'Learner age 18, father is a shopkeeper. Family income ₹15,000/month. Interested in electrical work but family worried about earnings.',
    conversationSummary: 'Parent asked about post-training earnings. Evidence shown for Rajasthan electrician income range. Parent still concerned about initial low income during apprenticeship.',
    evidenceViewed: ['ev-elec-earning-1', 'ev-elec-placement'],
    unresolvedQuestion: 'Is there financial support available during the apprenticeship period?',
  },
  {
    id: 'case-002',
    sessionId: 'FAM-2025-0043',
    trade: 'Healthcare Assistant',
    location: 'Lucknow, UP',
    primaryConcern: 'Safety',
    status: 'pending',
    familyContext: 'Learner age 19, female. Family concerned about safety in hospital environment and late-night shifts.',
    conversationSummary: 'Family explored healthcare assistant pathway. Concerned about working conditions and safety protocols.',
    evidenceViewed: ['ev-health-earning-1'],
    unresolvedQuestion: 'Are there healthcare roles that do not require night shifts?',
  },
  {
    id: 'case-003',
    sessionId: 'FAM-2025-0039',
    trade: 'CNC Operator',
    location: 'Ahmedabad, Gujarat',
    primaryConcern: 'Career Growth',
    status: 'resolved',
    familyContext: 'Learner age 17, completed 10th. Family supportive but wants to understand long-term growth.',
    conversationSummary: 'Complete career path shown from CNC operator to CNC programmer to manufacturing lead. Family satisfied with progression opportunities.',
    evidenceViewed: ['ev-cnc-earning-1', 'ev-cnc-placement'],
    unresolvedQuestion: '',
  },
];
