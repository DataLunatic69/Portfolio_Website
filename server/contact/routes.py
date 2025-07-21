from fastapi import APIRouter, HTTPException
from .service import send_email
from .schemas import ContactForm

contact_router = APIRouter()

@contact_router.post("/contact")
async def submit_contact(form: ContactForm):
    try:
        send_email(form)
        return {"detail": "Message sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))