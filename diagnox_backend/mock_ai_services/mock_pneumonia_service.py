from fastapi import FastAPI, File, UploadFile, Form
import time
import random

app = FastAPI()

@app.post("/predict/pneumonia")
async def predict_pneumonia(image: UploadFile = File(...)):
    # Simula algum processamento
    time.sleep(random.uniform(0.5, 1.5))

    # Gere uma probabilidade entre 0.5 e 1.0 (50% a 100%)
    probability = random.uniform(0.5, 1.0)
    percent = int(probability * 100)

    print(f"Mock Pneumonia Service: Received {image.filename}, predicting {percent}%")

    return {
        "condition_name": "pneumonia",
        "probability": percent,
        "prediction_text": f"Probabilidade de pneumonia: {percent}%"
    }


# Para rodar: uvicorn mock_ai_services.mock_pneumonia_service:app --port 8001