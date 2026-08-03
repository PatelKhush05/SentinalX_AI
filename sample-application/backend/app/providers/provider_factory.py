from app.providers.docker_provider import DockerProvider


class ProviderFactory:

    @staticmethod
    def get_provider(provider_type: str):

        providers = {
            "docker": DockerProvider(),
        }

        return providers.get(provider_type)