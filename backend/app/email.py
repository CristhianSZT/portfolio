import resend
from app.config import settings

resend.api_key = settings.RESEND_API_KEY

def send_contact_email(name: str, email: str, message: str) -> bool:
    try:
        params = {
            "from": "Portfolio <onboarding@resend.dev>",
            "to": [settings.CONTACT_EMAIL],
            "subject": f"Nuevo mensaje de contacto — {name}",
            "html": f"""
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
                        Nuevo mensaje de tu portfolio
                    </h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; color: #666; width: 100px;"><strong>Nombre:</strong></td>
                            <td style="padding: 10px 0;">{name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #666;"><strong>Email:</strong></td>
                            <td style="padding: 10px 0;">
                                <a href="mailto:{email}" style="color: #3b82f6;">{email}</a>
                            </td>
                        </tr>
                    </table>
                    <div style="margin-top: 20px; padding: 20px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #3b82f6;">
                        <strong style="color: #666;">Mensaje:</strong>
                        <p style="margin-top: 10px; line-height: 1.6;">{message}</p>
                    </div>
                    <p style="margin-top: 20px; color: #94a3b8; font-size: 12px;">
                        Enviado desde cristhianzavala.dev
                    </p>
                </div>
            """,
            "reply_to": email,
        }
        resend.Emails.send(params)
        return True
    except Exception as e:
        print(f"Error enviando email: {e}")
        return False