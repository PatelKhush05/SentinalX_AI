import json
import requests


class OllamaClient:

    def __init__(self):

        self.url = "http://ollama:11434/api/generate"
        self.model = "qwen2.5:3b"

    def generate(self, prompt: str):

        payload = {
            "model": self.model,
            "prompt": prompt,
            "stream": False,
            "format": "json"
        }

        response = requests.post(
            self.url,
            json=payload,
            timeout=180
        )

        response.raise_for_status()

        result = response.json()["response"]

        return json.loads(result)