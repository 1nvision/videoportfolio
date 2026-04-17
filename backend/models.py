from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid


# Portfolio Data Models
class SocialLinks(BaseModel):
    instagram: str
    linkedin: str
    artstation: str


class PersonalInfo(BaseModel):
    name: str
    title: str
    tagline: str
    about: str
    email: EmailStr
    social: SocialLinks


class FeaturedReel(BaseModel):
    title: str
    description: str
    thumbnail: str
    videoUrl: str


class SkillGroup(BaseModel):
    category: str
    items: List[str]


class Experience(BaseModel):
    role: str
    period: str
    description: str


class PortfolioData(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    personal: PersonalInfo
    featuredReel: FeaturedReel
    skills: List[SkillGroup]
    experience: List[Experience]
    updated_at: datetime = Field(default_factory=datetime.utcnow)


# Project Models
class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    category: str
    type: str  # video or photo
    thumbnail: str
    description: str
    tags: List[str]
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)


class ProjectCreate(BaseModel):
    title: str
    category: str
    type: str
    thumbnail: str
    description: str
    tags: List[str]
    order: int = 0


# Contact Models
class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    status: str = "new"  # new or read
    created_at: datetime = Field(default_factory=datetime.utcnow)


class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str
