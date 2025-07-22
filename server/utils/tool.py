from .vectordb import get_vectorstore
from langchain_core.retrievers import BaseRetriever


def get_retriever() -> BaseRetriever:
    vectorstore = get_vectorstore()
    if vectorstore is None:
        raise RuntimeError("Vectorstore could not be initialized. Check previous errors for details.")
    return vectorstore.as_retriever()





