import subprocess


class DockerContext:

    def get_container_status(self, container_name: str):

        try:
            result = subprocess.run(
                [
                    "docker",
                    "inspect",
                    "-f",
                    "{{.State.Status}}",
                    container_name,
                ],
                capture_output=True,
                text=True,
                timeout=5,
            )

            if result.returncode == 0:
                return result.stdout.strip()

            return "unknown"

        except Exception:
            return "unknown"

    def get_restart_count(self, container_name: str):

        try:
            result = subprocess.run(
                [
                    "docker",
                    "inspect",
                    "-f",
                    "{{.RestartCount}}",
                    container_name,
                ],
                capture_output=True,
                text=True,
                timeout=5,
            )

            if result.returncode == 0:
                return result.stdout.strip()

            return "0"

        except Exception:
            return "0"