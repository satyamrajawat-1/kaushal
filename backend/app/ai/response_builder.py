class IntentClassifier:
    def classify(self, message: str) -> str:
        lower_msg = message.lower()
        if "security" in lower_msg or "सुरक्षा" in lower_msg or "stable" in lower_msg:
            return "job_security"
        if "growth" in lower_msg or "aage" in lower_msg or "विकास" in lower_msg:
            return "career_growth"
        if "move" in lower_msg or "migrate" in lower_msg or "स्थानांतर" in lower_msg:
            return "migration"
        return "income"

class ConcernClassifier:
    def classify(self, intent: str) -> str:
        return intent

class EvidenceRanker:
    def rank(self, evidence_records):
        return sorted(evidence_records, key=lambda x: (x.confidence != 'high', x.region != 'district'))

class ResponseBuilder:
    def build(self, intent: str, evidence_records: list) -> str:
        responses = {
            "income": "Income can vary by role, location and experience. Here is the available evidence for this trade.",
            "job_security": "Job security in this trade depends on the type of employer and region. Government and large-company roles tend to offer more stability.",
            "career_growth": "Career growth in vocational trades follows a structured pathway. With experience and certification, progression to supervisory and specialist roles is possible.",
            "migration": "If local opportunities are limited, nearby districts and state capitals often have more openings. Let's explore what's available."
        }
        return responses.get(intent, responses["income"])
