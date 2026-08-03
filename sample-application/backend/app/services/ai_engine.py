from pathlib import Path

from sqlalchemy.orm import Session

from app.services.context_builder import ContextBuilder
from app.services.ollama_client import OllamaClient


class AIEngine:

    def __init__(self, db: Session):
        self.db = db

    def load_prompt(self):

        prompt_path = (
            Path(__file__).parent.parent
            / "prompts"
            / "rca_prompt.txt"
        )

        return prompt_path.read_text(
            encoding="utf-8"
        )

    def build_prompt(
        self,
        prompt: str,
        context: dict,
    ):

        return f"""
{prompt}

Incident Details

Incident ID:
{context["incident_id"]}

Service Name:
{context["service_name"]}

Alert:
{context["alert_name"]}

Severity:
{context["severity"]}

Status:
{context["status"]}

Source:
{context["source"]}

Created At:
{context["created_at"]}
"""

    def analyze_incident(
        self,
        incident_id: int,
    ):

        builder = ContextBuilder(self.db)

        context = builder.build_context(
            incident_id
        )

        if not context:
            return None

        prompt = self.load_prompt()

        final_prompt = self.build_prompt(
            prompt,
            context,
        )

        client = OllamaClient()

        ai_response = client.generate(
            final_prompt
        )

        return {
            "incident_id": incident_id,
            "root_cause": ai_response["root_cause"],
            "confidence": ai_response["confidence"],
            "severity": ai_response["severity"],
            "recommended_action": ai_response["recommended_action"],
        }