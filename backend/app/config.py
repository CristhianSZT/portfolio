from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    ALLOWED_ORIGINS: List[str] = ["http://localhost:5173"]
    CONTACT_EMAIL: str = ""
    RESEND_API_KEY: str = ""

    class Config:
        env_file = ".env"

settings = Settings()