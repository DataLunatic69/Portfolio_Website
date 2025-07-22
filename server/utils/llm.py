from sys import api_version
from langchain_groq import ChatGroq
from dotenv import load_dotenv
import os

model_name=os.getenv("MODEL_NAME")
api_key=os.getenv("API_KEY")


def get_llm():
    return ChatGroq(
        model_name=model_name,
        api_key=api_key
    )



