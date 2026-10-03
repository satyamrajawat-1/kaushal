import { useState, useCallback } from 'react';
import { useFamilySession } from './useFamilySession';
import { sendCounsellingMessage } from '../services/mockApi';
import type { ChatMessageData } from '../types/counselling';

export function useCounselling() {
  const { session, messages, addMessage } = useFamilySession();
  const [isLoading, setIsLoading] = useState(false);

  const send = useCallback(
    async (content: string, role: 'parent' | 'learner' = 'parent') => {
      const userMsg: ChatMessageData = {
        id: `msg-${Date.now()}`,
        role,
        content,
        timestamp: new Date().toISOString(),
      };
      addMessage(userMsg);
      setIsLoading(true);

      try {
        console.log("SEND CLICKED");
        const payload = { content, role, tradeId: session.selectedTradeId ?? '', concernIds: session.selectedConcerns };
        console.log("REQUEST PAYLOAD:", payload);
        console.log("API URL:", import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api');
        
        console.log("CALLING COUNSELLING API");
        const response = await sendCounsellingMessage(
          content,
          role,
          session.selectedTradeId ?? '',
          session.selectedConcerns
        );
        console.log("API RESPONSE:", response);
        addMessage(response);
      } catch (error) {
        console.error("COUNSELLING API ERROR:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [session.selectedTradeId, session.selectedConcerns, addMessage]
  );

  return { messages, isLoading, send };
}
