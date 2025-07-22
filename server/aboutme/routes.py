from fastapi import FastAPI, Query, APIRouter
from fastapi.responses import StreamingResponse
from typing import Optional
from .services import generate_chat_responses

graph_router=APIRouter()



@graph_router.get("/chat_stream/{message}")
async def chat_stream(message: str, checkpoint_id: Optional[str] = Query(None)):
    return StreamingResponse(
        generate_chat_responses(message, checkpoint_id), 
        media_type="text/event-stream"
    )
    