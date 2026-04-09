from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pathlib import Path
from .models import ProfileData
from .data import DB

app = FastAPI()

# CORS configuration (needed for local dev where frontend runs on a different port)
origins = [
    "http://localhost:5173",  # Vite default
    "http://localhost:3000",
    "https://taiwei-personal-website-backend-gpfjhvbhdugyehfr.eastasia-01.azurewebsites.net",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Endpoints ---

@app.get("/api/profile", response_model=ProfileData)
async def get_profile():
    return DB

# Mount static files (images, PDFs, etc.)
# Resolves to backend/static relative to src/backend/main.py
static_path = Path(__file__).parent.parent.parent / "static"
app.mount("/static", StaticFiles(directory=static_path), name="static")

# Serve built React frontend (only present after CI build)
frontend_dist_path = Path(__file__).parent.parent.parent / "frontend_dist"
if frontend_dist_path.exists():
    assets_path = frontend_dist_path / "assets"
    if assets_path.exists():
        app.mount("/assets", StaticFiles(directory=assets_path), name="assets")

    @app.get("/{full_path:path}")
    async def serve_spa(full_path: str):
        return FileResponse(frontend_dist_path / "index.html")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
