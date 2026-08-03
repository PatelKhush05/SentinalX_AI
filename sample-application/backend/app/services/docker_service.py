import docker


class DockerService:

    def __init__(self):
        self.client = docker.from_env()

    def get_container(self, container_name: str):

        try:
            return self.client.containers.get(container_name)

        except docker.errors.NotFound:
            return None

    def get_container_status(self, container_name: str):

        container = self.get_container(container_name)

        if not container:
            return "not_found"

        return container.status

    def get_restart_count(self, container_name: str):

        container = self.get_container(container_name)

        if not container:
            return 0

        return container.attrs["RestartCount"]

    def restart_container(self, container_name: str):

        container = self.get_container(container_name)

        if not container:
            return False

        container.restart()

        return True

    def get_logs(self, container_name: str, tail: int = 50):

        container = self.get_container(container_name)

        if not container:
            return ""

        return container.logs(
            tail=tail
        ).decode("utf-8")