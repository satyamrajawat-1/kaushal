import { create } from 'zustand';
import type { FamilySession, LearnerProfile, FamilyContext, LocationContext } from '../types/family';
import type { ChatMessageData } from '../types/counselling';
import { defaultFamilySession } from '../data/families';

interface FamilySessionState {
  session: FamilySession;
  messages: ChatMessageData[];
  demoRole: 'family' | 'counsellor' | 'admin';
  isSimpleMode: boolean;
  evidenceDrawerOpen: boolean;
  selectedEvidenceId: string | null;
  counsellorModalOpen: boolean;
  activeSection: string;

  // Actions
  updateLearner: (learner: Partial<LearnerProfile>) => void;
  updateFamily: (family: Partial<FamilyContext>) => void;
  updateLocation: (location: Partial<LocationContext>) => void;
  setLanguage: (lang: 'en' | 'hi') => void;
  setConcerns: (concerns: string[]) => void;
  toggleConcern: (concernId: string) => void;
  setTrade: (tradeId: string) => void;
  setStatus: (status: FamilySession['status']) => void;
  addMessage: (msg: ChatMessageData) => void;
  setDemoRole: (role: 'family' | 'counsellor' | 'admin') => void;
  toggleSimpleMode: () => void;
  setEvidenceDrawer: (open: boolean, evidenceId?: string | null) => void;
  setCounsellorModal: (open: boolean) => void;
  setActiveSection: (section: string) => void;
  resetSession: () => void;
}

export const useFamilySession = create<FamilySessionState>((set) => ({
  session: { ...defaultFamilySession },
  messages: [],
  demoRole: 'family',
  isSimpleMode: false,
  evidenceDrawerOpen: false,
  selectedEvidenceId: null,
  counsellorModalOpen: false,
  activeSection: 'home',

  updateLearner: (learner) =>
    set((s) => ({
      session: { ...s.session, learner: { ...s.session.learner, ...learner } },
    })),

  updateFamily: (family) =>
    set((s) => ({
      session: { ...s.session, family: { ...s.session.family, ...family } },
    })),

  updateLocation: (location) =>
    set((s) => ({
      session: { ...s.session, location: { ...s.session.location, ...location } },
    })),

  setLanguage: (lang) =>
    set((s) => ({ session: { ...s.session, language: lang } })),

  setConcerns: (concerns) =>
    set((s) => ({ session: { ...s.session, selectedConcerns: concerns } })),

  toggleConcern: (concernId) =>
    set((s) => {
      const current = s.session.selectedConcerns;
      const next = current.includes(concernId)
        ? current.filter((c) => c !== concernId)
        : [...current, concernId];
      return { session: { ...s.session, selectedConcerns: next } };
    }),

  setTrade: (tradeId) =>
    set((s) => ({ session: { ...s.session, selectedTradeId: tradeId } })),

  setStatus: (status) =>
    set((s) => ({ session: { ...s.session, status } })),

  addMessage: (msg) =>
    set((s) => ({ messages: [...s.messages, msg] })),

  setDemoRole: (role) => set({ demoRole: role }),

  toggleSimpleMode: () => set((s) => ({ isSimpleMode: !s.isSimpleMode })),

  setEvidenceDrawer: (open, evidenceId) =>
    set({ evidenceDrawerOpen: open, selectedEvidenceId: evidenceId ?? null }),

  setCounsellorModal: (open) => set({ counsellorModalOpen: open }),

  setActiveSection: (section) => set({ activeSection: section }),

  resetSession: () =>
    set({
      session: { ...defaultFamilySession, createdAt: new Date().toISOString() },
      messages: [],
    }),
}));
