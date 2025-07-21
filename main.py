# main.py
from fastapi import FastAPI
from server.contact.routes import router as contact_router

app = FastAPI()
app.include_router(contact_router)

