import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import TreinoService from '../services/TreinoService';

export default function TreinoForm({ navigation, route }) {
  const treinoAntigo = route.params?.treino || {};
  const [nome, setNome] = useState(treinoAntigo.nome || '');

  async function salvar() {
    if (!nome) {
      alert('Informe o nome');
      return;
    }

    if (treinoAntigo.id) {
      await TreinoService.atualizar({ id: treinoAntigo.id, nome });
      alert('Treino atualizado');
    } else {
      await TreinoService.salvar({ nome });
      alert('Treino criado');
    }

    navigation.goBack();
  }

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        label="Nome do Treino"
        value={nome}
        onChangeText={setNome}
      />
      <Button mode="contained" onPress={salvar}>Salvar</Button>
    </View>
  );
}
