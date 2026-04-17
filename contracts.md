# API Contracts & Integration Plan

## Current Mock Data Structure

### Personal Info (`portfolioData.personal`)
- name, title, tagline, about, email
- social: { instagram, linkedin, artstation }

### Featured Reel (`portfolioData.featuredReel`)
- title, description, thumbnail, videoUrl

### Projects (`portfolioData.projects`)
- id, title, category, type (video/photo), thumbnail, description, tags[]

### Skills (`portfolioData.skills`)
- category, items[]

### Experience (`portfolioData.experience`)
- role, period, description

---

## Backend Implementation

### MongoDB Models

#### 1. PortfolioData Model
```python
{
  personal: {
    name: str,
    title: str,
    tagline: str,
    about: str,
    email: str,
    social: {
      instagram: str,
      linkedin: str,
      artstation: str
    }
  },
  featuredReel: {
    title: str,
    description: str,
    thumbnail: str,
    videoUrl: str
  },
  skills: [{
    category: str,
    items: [str]
  }],
  experience: [{
    role: str,
    period: str,
    description: str
  }],
  updated_at: datetime
}
```

#### 2. Project Model
```python
{
  id: str (uuid),
  title: str,
  category: str (Matchday/Training/Interviews/Social Media/Events/Sponsored Content),
  type: str (video/photo),
  thumbnail: str (URL),
  description: str,
  tags: [str],
  order: int,
  created_at: datetime
}
```

#### 3. ContactMessage Model
```python
{
  id: str (uuid),
  name: str,
  email: str,
  subject: str,
  message: str,
  status: str (new/read),
  created_at: datetime
}
```

---

## API Endpoints

### GET /api/portfolio-data
**Response:**
```json
{
  "personal": {...},
  "featuredReel": {...},
  "skills": [...],
  "experience": [...]
}
```

### GET /api/projects
**Query Params:** 
- category (optional): filter by category
**Response:**
```json
{
  "projects": [...]
}
```

### GET /api/projects/:id
**Response:**
```json
{
  "project": {...}
}
```

### POST /api/contact
**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

---

## Frontend Integration Steps

### 1. Create API Service (`/app/frontend/src/services/api.js`)
- axios instance with base URL
- Functions: getPortfolioData(), getProjects(category), getProject(id), submitContact(data)

### 2. Update Components

**HomePage.jsx**
- Fetch portfolio data on mount
- Pass data to child components via props or context

**PortfolioGallery.jsx**
- Replace `portfolioData.projects` with `projects` from API
- Fetch projects on mount and on category change
- Use loading states

**ContactSection.jsx**
- Replace mock submission with API call to POST /api/contact
- Handle success/error states with toast

**AboutSection.jsx, SkillsExperience.jsx, VideoShowcase.jsx**
- Receive data via props instead of importing from mock.js

### 3. Remove/Keep Mock Data
- Keep mock.js for now as fallback
- Remove imports from components after API integration
- Add loading skeletons for better UX

---

## Database Seeding

Seed database with current mock data from mock.js to ensure immediate functionality after backend integration.
