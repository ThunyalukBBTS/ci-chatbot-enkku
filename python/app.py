import json
import os
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.schema import Document
from flask import Flask, request, jsonify
from openai import OpenAI
from langchain_community.vectorstores import FAISS
from dotenv import load_dotenv  # Import load_dotenv
from flask_cors import CORS

load_dotenv()  # Load environment variables from .env

app = Flask(__name__)
CORS(app)

# Load data from JSON file
# Use environment variable for file path to make it configurable in Azure Container
data_file_path = os.environ.get("DATA_FILE_PATH", "myquestion.json")
try:
    with open(
        data_file_path, "r", encoding="utf-8"
    ) as file:  # added encoding to handle potential character issues
        data = json.load(file)
except FileNotFoundError:
    print(f"Error: JSON file not found at {data_file_path}")
    data = []

# Convert JSON data to Document format
documents = [
    Document(
        page_content=f"คำถาม: {entry['question']}\nคำตอบ: {entry['answer']}",
        metadata={},
    )
    for entry in data
]

# Split documents into chunks
text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
splits = text_splitter.split_documents(documents)

# Create HuggingFace embeddings and vector store
embedding_model = HuggingFaceEmbeddings(
    model_name="sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
)

vectorstore = FAISS.from_documents(documents, embedding_model)

# Initialize OpenAI client
api_key = os.environ.get("OPENROUTER_API_KEY")
if not api_key:
    raise ValueError("OPENROUTER_API_KEY environment variable is not set.")

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=api_key,
)


# Define function to call Llama3 model
def ollama_llm(question, context):
    completion = client.chat.completions.create(
        model="meta-llama/llama-3.3-70b-instruct:free",
        messages=[
            {
                "role": "system",
                "content": f"""
            คุณคือผู้ช่วยที่จะตอบปัญหาของคณะวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น ตามแหล่งข้อมูลที่ให้มาเท่านั้น 
            คุณเป็นผู้ชาย ตอบลงท้ายด้วย "ครับ" และใช้คำแทนตัวเองว่า "ผม" ทุกครั้ง
            โปรดตอบคำถามโดยใช้ข้อมูลนี้:\n{context}
            """,
            },
            {"role": "user", "content": question},
        ],
    )
    return completion.choices[0].message.content


# Define RAG chain
def rag_chain(question):
    retrieved_docs = vectorstore.similarity_search(question, k=5)
    formatted_context = "\n\n".join(doc.page_content for doc in retrieved_docs)
    return ollama_llm(question, formatted_context)


# Define chat endpoint
@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    question = data.get("query", "")
    return jsonify({"answer": rag_chain(question=question)})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
