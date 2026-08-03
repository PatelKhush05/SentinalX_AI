from fastapi import APIRouter

from app.services.docker_service import DockerService

router = APIRouter(
    prefix="/docker",
    tags=["Docker"],
)


@router.get("/status/{container_name}")
def get_container_status(container_name: str):

    docker_service = DockerService()

    return {
        "container": container_name,
        "status": docker_service.get_container_status(container_name),
        "restart_count": docker_service.get_restart_count(container_name),
    }