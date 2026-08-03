import docker


class DockerService:

    def __init__(self):
        self.client = docker.from_env()

    # ------------------------------------
    # Get Container Object
    # ------------------------------------

    def get_container(self, container_name: str):

        try:
            container = self.client.containers.get(container_name)

            # Always refresh container information
            container.reload()

            return container

        except docker.errors.NotFound:
            return None

        except Exception as e:
            print(f"[DockerService] Error getting container {container_name}: {e}")
            return None

    # ------------------------------------
    # Get Container Status
    # ------------------------------------

    def get_container_status(self, container_name: str):

        container = self.get_container(container_name)

        if not container:
            return "not_found"

        try:
            container.reload()
            return container.status.lower()

        except Exception as e:
            print(f"[DockerService] Error getting status: {e}")
            return "unknown"

    # ------------------------------------
    # Get Restart Count
    # ------------------------------------

    def get_restart_count(self, container_name: str):

        container = self.get_container(container_name)

        if not container:
            return 0

        try:
            return container.attrs["RestartCount"]

        except Exception:
            return 0

    # ------------------------------------
    # Restart Container
    # ------------------------------------

    def restart_container(self, container_name: str):

        container = self.get_container(container_name)

        if not container:
            return False

        try:
            container.restart()
            return True

        except Exception as e:
            print(f"[DockerService] Restart failed: {e}")
            return False

    # ------------------------------------
    # Get Last Logs
    # ------------------------------------

    def get_logs(self, container_name: str, tail: int = 50):

        container = self.get_container(container_name)

        if not container:
            return ""

        try:
            logs = container.logs(
                tail=tail,
                timestamps=True
            )

            return logs.decode("utf-8", errors="ignore")

        except Exception as e:
            print(f"[DockerService] Error reading logs: {e}")
            return ""

    # ------------------------------------
    # Get Container Health
    # ------------------------------------

    def get_health(self, container_name: str):

        container = self.get_container(container_name)

        if not container:
            return "not_found"

        try:

            state = container.attrs.get("State", {})

            health = state.get("Health")

            if not health:
                return "no_healthcheck"

            return health.get("Status", "unknown")

        except Exception:
            return "unknown"

    # ------------------------------------
    # Debug Information
    # ------------------------------------

    def debug_container(self, container_name: str):

        container = self.get_container(container_name)

        if not container:
            return None

        return {

            "name": container.name,

            "status": self.get_container_status(container_name),

            "health": self.get_health(container_name),

            "restart_count": self.get_restart_count(container_name)

        }