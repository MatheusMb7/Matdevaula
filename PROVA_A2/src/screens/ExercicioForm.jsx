import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import ExercicioService from '../services/ExercicioService';

export default function ExercicioForm({ navigation, route }) {
  const exercicioAntigo = route.params?.exercicio || {};
  const [nome, setNome] = useState(exercicioAntigo.nome || '');

  async function salvar() {
    if (!nome) {
      alert('Informe o nome');
      return;
    }

    if (exercicioAntigo.id) {
      await ExercicioService.atualizar({ id: exercicioAntigo.id, nome });
      alert('Exercício atualizado');
    } else {
      await ExercicioService.salvar({ nome });
      alert('Exercício criado');
    }

    navigation.goBack();
  }

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        label='Nome'
        value={nome}
        onChangeText={setNome}
      />
      <Button mode='contained' onPress={salvar}>Salvar</Button>
    </View>
  );
}
