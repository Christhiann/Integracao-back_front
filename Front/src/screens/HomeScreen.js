// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';

export default function HomeScreen() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    api.get('/health')
      .then(res => setStatus(res.data.message))
      .catch(err => setStatus('Erro na conexão'));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>{status}</Text>
    </View>
  );
}
