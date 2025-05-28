from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from pydantic import ValidationError

from .schemas import DiagnosisResponse, DiagnosisRequestData
from .services import process_diagnosis
from .config import settings

app = FastAPI(title="Diagnox Backend API")

# Configuração do CORS para permitir chamadas do front-end
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Em produção restrinja os domínios autorizados
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/diagnose", response_model=DiagnosisResponse)
async def diagnose_image_endpoint(
    exam_type: str = Form(...),
    patient_sex: Optional[str] = Form(None),
    selected_diseases_json: Optional[str] = Form(None),
    image: UploadFile = File(...)
):
    try:
        request_data = DiagnosisRequestData(
            exam_type=exam_type,
            patient_sex=patient_sex,
            selected_diseases_json=selected_diseases_json  # deixa como string JSON
        )
    except ValidationError as e:
        raise HTTPException(status_code=422, detail=e.errors())

    # validação do arquivo imagem
    if not image.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Tipo de arquivo inválido. Apenas imagens são permitidas.")

    ai_results = await process_diagnosis(
        exam_type=request_data.exam_type,
        image_file=image,
        patient_sex=request_data.patient_sex,
        selected_diseases_json=request_data.selected_diseases_json  # passa a string JSON
    )

    return DiagnosisResponse(
        original_filename=image.filename,
        exam_type=request_data.exam_type,
        results=ai_results,
        patient_sex_considered=request_data.patient_sex if request_data.exam_type == "idade_ossea" else None
    )

@app.get("/health")
async def health_check():
    return {"status": "ok", "message": "Diagnox Backend is running!"}

@app.get("/usuarios")
async def get_usuarios():
    return [
        {"nome": "João"},
        {"nome": "Maria"},
        {"nome": "Ana"},
    ]
