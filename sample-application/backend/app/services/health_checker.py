import requests


class HealthChecker:

    def check_backend(self):

        try:
            response = requests.get(
                "http://backend:8000/",
                timeout=5
            )

            if response.status_code == 200:
                return True

            return False

        except Exception:
            return False