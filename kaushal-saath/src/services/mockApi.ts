import { trades } from '../data/trades';
import { evidenceRecords } from '../data/outcomes';
import { careerPaths } from '../data/careerPaths';
import { providers } from '../data/providers';
import { concerns } from '../data/concerns';
import { scenarios } from '../data/scenarios';
import { counsellors, counsellingCases } from '../data/counsellors';
import {
  analyticsSummary,
  concernDistribution,
  concernShift,
  resolutionData,
  districtInsights,
  tradeInsights,
  insightCards,
} from '../data/analytics';
import type { ChatMessageData } from '../types/counselling';
import { apiClient } from './apiClient';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API !== 'false';
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Trades
export async function getTrades() {
  if (!USE_MOCK) return apiClient.getTrades();
  await delay(200);
  return trades;
}

export async function getTrade(id: string) {
  if (!USE_MOCK) return apiClient.getTrade(id);
  await delay(100);
  return trades.find((t) => t.id === id) ?? null;
}

// Evidence
export async function getEvidence(tradeId: string) {
  if (!USE_MOCK) return apiClient.getEvidence(tradeId);
  await delay(200);
  return evidenceRecords.filter((e) => e.tradeId === tradeId);
}

// Career Paths
export async function getCareerPath(tradeId: string) {
  if (!USE_MOCK) return apiClient.getCareerPath(tradeId);
  await delay(150);
  return careerPaths[tradeId] ?? [];
}

// Providers
export async function getProviders(tradeId?: string) {
  if (!USE_MOCK) return apiClient.getProviders(tradeId);
  await delay(150);
  if (tradeId) return providers.filter((p) => p.tradeIds.includes(tradeId));
  return providers;
}

export async function getLocalOpportunities(state: string, tradeId: string) {
  if (!USE_MOCK) return apiClient.getLocalOpportunities(state, tradeId);
  await delay(200);
  const localProviders = providers.filter(
    (p) => p.state === state && p.tradeIds.includes(tradeId)
  );
  const evidence = evidenceRecords.filter(
    (e) => e.tradeId === tradeId && (e.region === state || e.region === 'National')
  );
  return { providers: localProviders, evidence };
}

// Concerns
export async function getConcerns() {
  await delay(100);
  return concerns;
}

// Scenarios
export async function getScenarios(tradeId?: string) {
  if (!USE_MOCK && tradeId) return apiClient.getScenarios(tradeId);
  await delay(150);
  if (tradeId) return scenarios.filter((s) => s.tradeId === tradeId);
  return scenarios;
}

// Family Session
export async function getFamilySession(_id: string) {
  await delay(100);
  return null;
}

// Counsellors
export async function getCounsellors() {
  if (!USE_MOCK) return apiClient.getCounsellors();
  await delay(200);
  return counsellors;
}

export async function getCounsellingCases() {
  if (!USE_MOCK) return apiClient.getCounsellingCases();
  await delay(200);
  return counsellingCases;
}

// Admin Analytics
export async function getAdminAnalytics() {
  if (!USE_MOCK) return apiClient.getAdminOverview();
  await delay(200);
  return analyticsSummary;
}

export async function getDistrictInsights() {
  if (!USE_MOCK) return apiClient.getDistrictInsights();
  await delay(150);
  return districtInsights;
}

export async function getTradeInsights() {
  if (!USE_MOCK) return apiClient.getTradeInsights();
  await delay(150);
  return tradeInsights;
}

export async function getConcernDistribution() {
  if (!USE_MOCK) return apiClient.getConcernDistribution();
  await delay(100);
  return concernDistribution;
}

export async function getConcernShift() {
  if (!USE_MOCK) return apiClient.getConcernShift();
  await delay(100);
  return concernShift;
}

export async function getResolutionData() {
  if (!USE_MOCK) return apiClient.getResolutionData();
  await delay(100);
  return resolutionData;
}

export async function getInsightCards() {
  await delay(100);
  return insightCards;
}

// Mutations
export async function sendCounsellingMessage(
  message: string,
  _role: 'parent' | 'learner',
  _tradeId: string,
  _concernIds: string[]
): Promise<ChatMessageData> {
  if (!USE_MOCK) return apiClient.sendCounsellingMessage(message, _role, _tradeId, _concernIds);
  await delay(800);

  const responses: Record<string, string> = {
    default:
      'Income can vary by role, location and experience. Here is the available evidence for this trade.',
    security:
      'Job security in this trade depends on the type of employer and region. Government and large-company roles tend to offer more stability.',
    growth:
      'Career growth in vocational trades follows a structured pathway. With experience and certification, progression to supervisory and specialist roles is possible.',
    migration:
      "If local opportunities are limited, nearby districts and state capitals often have more openings. Let's explore what's available.",
  };

  const lowerMsg = message.toLowerCase();
  let response = responses.default;
  if (lowerMsg.includes('security') || lowerMsg.includes('सुरक्षा') || lowerMsg.includes('stable'))
    response = responses.security;
  else if (lowerMsg.includes('growth') || lowerMsg.includes('aage') || lowerMsg.includes('विकास'))
    response = responses.growth;
  else if (lowerMsg.includes('move') || lowerMsg.includes('migrate') || lowerMsg.includes('स्थानांतर'))
    response = responses.migration;

  return {
    id: `msg-${Date.now()}`,
    role: 'system',
    content: response,
    timestamp: new Date().toISOString(),
    evidenceIncluded: true,
  };
}
