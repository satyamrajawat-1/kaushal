import type { TrainingProvider } from '../types/trade';

export const providers: TrainingProvider[] = [
  { id: 'prov-1', name: 'Government ITI Jaipur', tradeIds: ['electrician', 'welder'], district: 'Jaipur', state: 'Rajasthan', type: 'ITI', placementSupport: true },
  { id: 'prov-2', name: 'Rajasthan Skill University Centre', tradeIds: ['electrician', 'solar-technician'], district: 'Jaipur', state: 'Rajasthan', type: 'Government', placementSupport: true },
  { id: 'prov-3', name: 'NSDC Partner — Jaipur', tradeIds: ['it-support', 'healthcare-assistant'], district: 'Jaipur', state: 'Rajasthan', type: 'NSDC', placementSupport: true },
  { id: 'prov-4', name: 'Government ITI Ahmedabad', tradeIds: ['cnc-operator', 'welder'], district: 'Ahmedabad', state: 'Gujarat', type: 'ITI', placementSupport: true },
  { id: 'prov-5', name: 'Private Training Centre — Pune', tradeIds: ['cnc-operator', 'it-support'], district: 'Pune', state: 'Maharashtra', type: 'Private', placementSupport: false },
  { id: 'prov-6', name: 'Government ITI Lucknow', tradeIds: ['electrician', 'healthcare-assistant'], district: 'Lucknow', state: 'Uttar Pradesh', type: 'ITI', placementSupport: true },
  { id: 'prov-7', name: 'NSDC Partner — Bengaluru', tradeIds: ['it-support', 'solar-technician'], district: 'Bengaluru', state: 'Karnataka', type: 'NSDC', placementSupport: true },
];
