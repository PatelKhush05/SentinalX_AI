from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.connection import engine
from app.database.base import Base
from app.models import User, Task

from app.routes.task import router as task_router

app = FastAPI(
    title="TaskFlow API",
    version="1.0.0"
)

# 👇 Add CORS middleware HERE
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

@app.get("/")
def home():
    return {
        "message": "TaskFlow Backend Running 🚀"
    }