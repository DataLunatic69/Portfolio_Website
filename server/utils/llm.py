from ..config import settings
from langchain_groq import ChatGroq


def get_llm():
    if not settings.GROQ_API_KEY:
        raise ValueError("API key is not set")
    return ChatGroq(
        model_name=settings.MODEL_NAME,
        api_key=settings.GROQ_API_KEY
    )



