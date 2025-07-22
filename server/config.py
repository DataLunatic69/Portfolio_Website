import os
from pydantic_settings import BaseSettings
from pydantic import EmailStr

class Settings(BaseSettings):
    MODEL_NAME: str = "mixtral-8x7b-32768"
    GROQ_API_KEY: str
    EMAIL_SENDER: EmailStr
    EMAIL_RECEIVER: EmailStr
    APP_PASSWORD: str
    
    class Config:
        env_file = ".env"

settings = Settings()