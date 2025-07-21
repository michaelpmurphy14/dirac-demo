# Dirac Demo App

A lightweight, full-stack demo application built to simulate deployment configuration workflows in a manufacturing setting.

## 🧱 Tech Stack

- **Frontend**: React + TypeScript
- **Backend**: FastAPI (Python)
- **Communication**: REST API
- **Future Ready**: Docker-ready structure

## 🧪 Features

- Upload CAD metadata (JSON)
- Select deployment targets (PLM, MES, ERP)
- Preview simulated deployment package

## 🚀 Running Locally

### Backend
```bash
cd backend
pip install fastapi uvicorn python-multipart
uvicorn main:app --reload
```

### Frontend (static)
```bash
cd frontend
npx serve .
```

## 📦 Sample Input

Check `sample_input/cad-metadata.json` for a mock file.

## 🛠 Roadmap Ideas

- Add Docker and docker-compose
- Real-time status updates
- Auth (JWT or basic)
