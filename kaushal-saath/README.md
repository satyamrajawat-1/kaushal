# Kaushal Saath

AI-Enabled Family Counselling Platform for Vocational Careers

Designed for the **Smart India Hackathon 2026**, Kaushal Saath is an evidence-first career guidance platform treating the family as the core decision-making unit. 

## Project Overview

Vocational training decisions in India are often influenced by family perception. Learners may be interested in vocational careers, but families may hesitate due to concerns about income, job security, safety, and migration. This platform helps learners and parents jointly explore trades, validate evidence, and plan careers.

## Architecture

This project consists of a Single-Page Application (SPA) frontend and a Python backend.

### Frontend
- **Framework**: React + Vite
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **Mode**: Seamless fallback between Mock API (for fast UI dev) and Real Backend API.

### Backend
- **Framework**: FastAPI (Python)
- **Database**: PostgreSQL with `pgvector` (via SQLAlchemy 2.0 async and asyncpg)
- **Migrations**: Alembic
- **Caching**: Redis
- **Containerization**: Docker Compose

## Folder Structure

```
.
├── backend/                  # FastAPI Backend codebase
│   ├── alembic/              # Database migrations
│   ├── app/                  # Application code
│   │   ├── ai/               # AI fallback and rule-based response builders
│   │   ├── api/              # FastAPI routes and router setup
│   │   ├── core/             # DB setup, Pydantic settings
│   │   ├── models/           # SQLAlchemy models
│   │   ├── schemas/          # Pydantic validation schemas
│   │   ├── seed/             # Seed scripts for mock db population
│   │   └── services/         # Business logic and DB interactions
│   ├── docker-compose.yml    # Postgres + Redis + Backend docker config
│   ├── Dockerfile
│   └── requirements.txt      # Python dependencies
├── kaushal-saath/            # React Frontend codebase
│   ├── src/                  
│   │   ├── components/       # Reusable UI components
│   │   ├── data/             # Mock fallback data
│   │   ├── hooks/            # Zustand store and data fetching hooks
│   │   ├── sections/         # One-page scroll sections
│   │   ├── services/         # apiClient and mockApi switch
│   │   ├── styles/           # Tailwind and global CSS
│   │   └── types/            # TypeScript interfaces
│   └── vite.config.ts
```

## Setup & Startup

### 1. Environment Variables

**Backend (`backend/.env`):**
```env
DATABASE_URL=postgresql+asyncpg://postgres:postgres@localhost:5432/kaushal
REDIS_URL=redis://localhost:6379/0
CORS_ORIGINS=http://localhost:5173
APP_ENV=development
DEBUG=true
```

**Frontend (`kaushal-saath/.env`):**
```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_USE_MOCK_API=true
```

*(Set `VITE_USE_MOCK_API=false` to use the real FastAPI backend).*

### 2. Backend Startup (Docker)

If you have Docker Desktop installed, you can spin up the entire backend stack easily:

```bash
cd backend
docker compose up -d
```
This will start PostgreSQL (with pgvector), Redis, and the FastAPI application on port 8000.

### 3. Database Migration & Seeding (Local Dev)

If you are running Python locally (without Docker for the backend app):
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or .\venv\Scripts\Activate.ps1 on Windows
pip install -r requirements.txt

# Run migrations
alembic upgrade head

# Seed prototype data
python -m app.seed.seed

# Start FastAPI
uvicorn app.main:app --reload
```

### 4. Frontend Startup

```bash
cd kaushal-saath
npm install
npm run dev
```
The prototype will be available at `http://localhost:5173`.

## API Documentation
When the backend is running, access the auto-generated Swagger UI at:
- **Swagger**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## Operating Modes
- **Mock Mode**: The frontend operates fully locally using `src/data/` if the backend is down or `VITE_USE_MOCK_API=true`.
- **Real Backend Mode**: The frontend calls the FastAPI backend to retrieve database-driven trades, AI counselling responses, and evidence. Ensure `VITE_USE_MOCK_API=false`.

## Demo Roles
For prototype testing, you can assume different roles without a hard login wall:
- **Family / Learner**: Exploring the platform, chatting with the AI.
- **Counsellor**: Escalate and view session contexts to provide human resolution.
- **Administrator**: View Recharts-based platform analytics and evidence gap hotspots.
