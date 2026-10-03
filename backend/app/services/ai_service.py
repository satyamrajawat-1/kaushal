from typing import List, Dict, Any
from app.ai.response_builder import IntentClassifier, ConcernClassifier, EvidenceRanker, ResponseBuilder

class AIService:
    def __init__(self):
        self.intent_classifier = IntentClassifier()
        self.concern_classifier = ConcernClassifier()
        self.evidence_ranker = EvidenceRanker()
        self.response_builder = ResponseBuilder()
    
    def process_counselling_message(self, message: str, evidence: List[Any]) -> Dict[str, Any]:
        intent = self.intent_classifier.classify(message)
        concern = self.concern_classifier.classify(intent)
        ranked_evidence = self.evidence_ranker.rank(evidence)
        response_text = self.response_builder.build(intent, ranked_evidence)
        
        needs_human = False
        if not ranked_evidence or any(e.confidence == 'low' for e in ranked_evidence):
            needs_human = True
            
        return {
            "message": response_text,
            "intent": intent,
            "concern": concern,
            "evidence": ranked_evidence,
            "confidence": "high" if ranked_evidence else "low",
            "source_scope": ranked_evidence[0].region if ranked_evidence else "none",
            "fallback_used": False if ranked_evidence and ranked_evidence[0].region == 'district' else True,
            "follow_up_questions": [],
            "needs_human_counsellor": needs_human
        }

ai_service = AIService()
