# Animal NGO Platform

A full-stack web platform connecting rescued animals with people who want to adopt, foster, or sponsor them. Built for NGOs to manage their animal registry and interact with the community.

## Tech Stack

- **Frontend:** React 19.2 + Vite + React Router
- **Backend:** Node.js + Express
- **Database:** SQLite (better-sqlite3)
- **Auth:** JWT + bcrypt
- **Containers:** Docker + Docker Compose

## Features

- Public catalog with filters by animal category
- Detailed animal profiles with medical records and personality info
- NGO registration and login with JWT authentication
- Admin dashboard for managing animals (create, edit, delete)
- Supports adoption, fostering, and sponsoring flows

## Getting Started

### With Docker (recommended)

```bash
docker compose up --build -d
# App available at http://localhost:3002
```

### Manual

**Backend (Terminal 1):**
```bash
cd server
npm install
node index.js
# API running at http://localhost:3001
```

**Frontend (Terminal 2):**
```bash
npm install
npm run dev
# App running at http://localhost:5173
```

## API Endpoints

| Method | Route | Auth | Description |
|--------|-------|:----:|-------------|
| `POST` | `/api/auth/register` | — | Register a new NGO |
| `POST` | `/api/auth/login` | — | Login and receive JWT |
| `GET` | `/api/auth/me` | JWT | Get authenticated NGO data |
| `GET` | `/api/health` | — | Health check |