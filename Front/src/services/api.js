// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // o IP da sua máquina e porta do backend
});

