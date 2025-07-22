from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from .loader import load_data
import logging
import traceback

logger = logging.getLogger(__name__)


def get_vectorstore() -> Chroma:
    try:
        documents = load_data("data/info.json")
        if not documents:
            raise ValueError("No documents found")
        vectorstore = Chroma.from_documents(
            documents=documents,
            embedding=HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2"),
            collection_name="aboutme",
            persist_directory="db",
        )
        return vectorstore
    except Exception as e:
        logger.error(f"Vectore initialization failed: {e}")
        traceback.print_exc()
        raise RuntimeError("Failed to initialize vectorstore")
        




    
    
    
    














