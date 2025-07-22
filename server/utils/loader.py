from langchain_community.document_loaders import JSONLoader


def load_data(file_path: str) -> list[dict]:
    loader = JSONLoader(file_path=file_path, jq_schema=".",text_content=False)
    docs = loader.load()
    return docs





