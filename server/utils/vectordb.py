from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from .loader import load_data

document=load_data("server/utils/info.json")


def get_vectorstore() -> Chroma:
    try:
        vectorstore = Chroma(
            documents=document,
            collection_name="aboutme",
            embedding_function=HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2"),
            persist_directory="db",
        )
        return vectorstore
    except Exception as e:
        print(f"Error loading vectorstore: {e}")
        return None




    
    
    
    














