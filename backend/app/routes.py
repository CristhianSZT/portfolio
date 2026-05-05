from fastapi import APIRouter, HTTPException
from groq import Groq
from app.models import ContactMessage, ChatMessage
from app.email import send_contact_email
from app.chat import SYSTEM_PROMPT
from app.config import settings

router = APIRouter()

@router.get("/health")
def health():
    return {"status": "ok"}

@router.post("/contact")
async def send_contact(data: ContactMessage):
    success = send_contact_email(
        name=data.name,
        email=data.email,
        message=data.message
    )
    if not success:
        raise HTTPException(
            status_code=500,
            detail="Error al enviar el mensaje. Intenta de nuevo."
        )
    
    return {
        "success": True,
        "message": f"Mensaje recibido de {data.name}"
    }

@router.post("/chat")
async def chat(data: ChatMessage):
    try:
        client = Groq(api_key=settings.GROQ_API_KEY)
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            max_tokens=500,
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": data.message}
            ]
        )
        return {"response": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error al procesar el mensaje.")