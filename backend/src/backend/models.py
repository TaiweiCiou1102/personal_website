from pydantic import BaseModel
from typing import List, Optional

class Link(BaseModel):
    label: str
    url: str

class ExperienceItem(BaseModel):
    company: str
    period: str
    role: str
    description: Optional[List[dict]] = None # List of {title: str, items: List[str]} for projects

class EducationItem(BaseModel):
    school: str
    period: str
    degree: str
    details: str
    link: Optional[str] = None

class SkillCategory(BaseModel):
    category: str
    items: List[str]

class Project(BaseModel):
    id: str
    title: str
    type: str
    description: Optional[str] = None
    imageUrl: Optional[str] = None
    documentUrl: Optional[str] = None
    link: Optional[str] = None

class ProfileData(BaseModel):
    name: str
    contact: str
    email: str
    summary: str
    links: List[Link]
    experience: List[ExperienceItem]
    education: List[EducationItem]
    skills: List[SkillCategory]
    certifications: List[str]
    languages: List[str]
    portfolio: List[Project]
