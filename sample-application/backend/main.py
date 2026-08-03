from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response

from prometheus_client import generate_latest, CONTENT_TYPE_LATEST

from app.database.connection import engine
from app.database.base import Base
from app.models import User, Task

from app.routes.task import router as task_router
from app.routes.incidents import router as incident_router
from app.routes.recovery import router as recovery_router
from app.routes.ai import router as ai_router
from app.routes.docker import router as docker_router
from app.routes.monitor import router as monitor_router

app = FastAPI(
    title="TaskFlow API",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables
Base.metadata.create_all(bind=engine)

# Register routers
app.include_router(task_router)
app.include_router(incident_router)
app.include_router(recovery_router)
app.include_router(ai_router)
app.include_router(docker_router)
app.include_router(monitor_router)

@app.get("/")
def home():
    return {
        "message": "TaskFlow Backend Running 🚀"
    }

# Prometheus Metrics Endpoint
@app.get("/metrics")
def metrics():
    return Response(
        content=generate_latest(),
        media_type=CONTENT_TYPE_LATEST
    )