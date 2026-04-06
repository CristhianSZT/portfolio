from fastapi import APIRouter, HTTPException
from app.models import ContactMessage
from app.email import send_contact_email

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