# main.py
from fastapi import FastAPI
from server.contact.routes import  contact_router

app = FastAPI()
app.include_router(contact_router)

