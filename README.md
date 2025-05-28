
## 🚀 Como Rodar
Utilize cd para acessar cada aquivo e assim rodar os camantos dentro de cada pasta
### 1. Rodar os mocks (cada um em um terminal separado): todo
uvicorn mock_ai_services.mock_pneumonia_service:app --port 8001 --reload
uvicorn mock_ai_services.mock_pleural_effusion_service:app --port 8002 --reload
uvicorn mock_ai_services.mock_bone_age_service:app --port 8003 --reload

2: Rodar o back end em outro terminal separado:
uvicorn app.main:app --port 8000 --reload

3: Rodar o front em outro terminal separado
npm install
npm run dev
