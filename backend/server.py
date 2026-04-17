from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import Optional
from models import (
    PortfolioData, Project, ProjectCreate,
    ContactMessage, ContactMessageCreate
)
from seed_data import seed_portfolio_data, seed_projects


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Seed database on startup
@app.on_event("startup")
async def seed_database():
    # Check if portfolio data exists
    portfolio_count = await db.portfolio_data.count_documents({})
    if portfolio_count == 0:
        portfolio_data = PortfolioData(**seed_portfolio_data)
        await db.portfolio_data.insert_one(portfolio_data.dict())
        logging.info("Portfolio data seeded successfully")
    
    # Check if projects exist
    project_count = await db.projects.count_documents({})
    if project_count == 0:
        projects = [Project(**project_data) for project_data in seed_projects]
        await db.projects.insert_many([p.dict() for p in projects])
        logging.info(f"Seeded {len(projects)} projects successfully")


# Routes
@api_router.get("/")
async def root():
    return {"message": "Portfolio API is running"}


@api_router.get("/portfolio-data")
async def get_portfolio_data():
    """Get portfolio data including personal info, featured reel, skills, and experience"""
    portfolio = await db.portfolio_data.find_one({}, {"_id": 0})
    if not portfolio:
        raise HTTPException(status_code=404, detail="Portfolio data not found")
    return portfolio


@api_router.get("/projects")
async def get_projects(category: Optional[str] = None):
    """Get all projects, optionally filtered by category"""
    query = {}
    if category and category != "All":
        query["category"] = category
    
    projects = await db.projects.find(query, {"_id": 0}).sort("order", 1).to_list(100)
    return {"projects": projects}


@api_router.get("/projects/{project_id}")
async def get_project(project_id: str):
    """Get a single project by ID"""
    project = await db.projects.find_one({"id": project_id}, {"_id": 0})
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"project": project}


@api_router.post("/contact")
async def submit_contact(message: ContactMessageCreate):
    """Submit a contact form message"""
    contact_message = ContactMessage(**message.dict())
    await db.contact_messages.insert_one(contact_message.dict())
    return {
        "success": True,
        "message": "Message sent successfully. I'll get back to you soon!"
    }


@api_router.get("/contact-messages")
async def get_contact_messages(status: Optional[str] = None):
    """Get all contact messages (for admin use)"""
    query = {}
    if status:
        query["status"] = status
    
    messages = await db.contact_messages.find(query, {"_id": 0}).sort("created_at", -1).to_list(100)
    return {"messages": messages}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
