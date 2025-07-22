# main.py
from fastapi import FastAPI
from server.contact.routes import  contact_router
from server.aboutme.routes import graph_router
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact_router)
app.include_router(graph_router)

limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter

