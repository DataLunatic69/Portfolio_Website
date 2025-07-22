# main.py
from fastapi import FastAPI
from server.contact.routes import  contact_router
from server.aboutme.routes import graph_router

app = FastAPI()
app.include_router(contact_router)
app.include_router(graph_router)

