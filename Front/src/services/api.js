// services/api.js
import axios from 'axios';

const isDevelopment = process.env.NODE_ENV === 'development';

const api = axios.create({
  baseURL: isDevelopment 
    ? 'http://localhost:8000' 
    : 'http://35.175.193.245', // IP do servidor EC2
  timeout: 10000, // timeout de 10 segundos
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor para tratamento de erros
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // Erro do servidor
      console.error('Erro na resposta:', error.response.data);
    } else if (error.request) {
      // Erro na requisição
      console.error('Erro na requisição:', error.request);
    } else {
      // Erro na configuração da requisição
      console.error('Erro:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;

