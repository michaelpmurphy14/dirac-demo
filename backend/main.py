from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from datetime import datetime
import uuid
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/deploy")
async def deploy(
    file: UploadFile,
    systems: str = Form(...)
):
    contents = await file.read()
    try:
        original_data = json.loads(contents)
    except json.JSONDecodeError:
        return JSONResponse(status_code=400, content={"error": "Invalid JSON"})

    response = {
        "deployment_id": str(uuid.uuid4()),
        "selected_systems": systems.split(","),
        "deployment_time": datetime.utcnow().isoformat() + "Z",
        "original_data": original_data
    }
    return response
