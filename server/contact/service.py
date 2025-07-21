from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib
from .schemas import ContactForm
from dotenv import load_dotenv
import os


load_dotenv()

EMAIL_SENDER = os.getenv("EMAIL_SENDER")
EMAIL_RECEIVER = os.getenv("EMAIL_RECEIVER")
EMAIL_PASSWORD = os.getenv("APP_PASSWORD")

def send_email(contact: ContactForm):
    sender_email = EMAIL_SENDER       # Your sending email
    receiver_email = EMAIL_RECEIVER    # Your own address (to receive)
    password = EMAIL_PASSWORD            # Use an app password if needed

    msg = MIMEMultipart("alternative")
    msg["Subject"] = "New Contact Form Submission"
    msg["From"] = sender_email
    msg["To"] = receiver_email

    text = f"Name: {contact.name}\nEmail: {contact.email}\nMessage: {contact.message}"
    html = f"""
    <html>
    <body>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Message:</strong><br>{contact.message}</p>
    </body>
    </html>
    """
    msg.attach(MIMEText(text, "plain"))
    msg.attach(MIMEText(html, "html"))

    smtp_server = "smtp.gmail.com"
    smtp_port = 587

    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, msg.as_string())