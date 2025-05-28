from fastapi import FastAPI, UploadFile, File
import random
import time

app = FastAPI()

@app.post("/predict/pleural_effusion")
async def predict_pleural_effusion(image: UploadFile = File(...)):
    time.sleep(random.uniform(1, 2))

    # Gere uma probabilidade entre 0.5 e 1 (ou seja, de 50% a 100%)
    probability = random.uniform(0.5, 1)
    percent = int(probability * 100)

    return {
        "condition_name": "derrame_pleural",
        "probability": percent,
        "prediction_text": f"Probabilidade de derrame pleural: {percent}%"
    }
