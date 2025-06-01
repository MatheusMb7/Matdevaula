import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import TreinoService from '../services/TreinoService';

export default function TreinoLista({ navigation }) {
  const [treinos, setTreinos] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    const data = await TreinoService.listar();
    setTreinos(data);
  }

  async function excluir(id) {
    await TreinoService.remover(id);
    carregar();
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Button mode="contained" onPress={() => navigation.navigate('TreinoForm')}>Novo Treino</Button>
      <FlatList
        data={treinos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginVertical: 5 }}>
            <Card.Title title={item.nome} />
            <Card.Actions>
              <Button onPress={() => navigation.navigate('TreinoForm', { treino: item })}>Editar</Button>
              <Button onPress={() => excluir(item.id)}>Excluir</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}
