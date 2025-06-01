import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import ExercicioService from '../services/ExercicioService';

export default function ExercicioLista({ navigation }) {
  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    const data = await ExercicioService.listar();
    setExercicios(data);
  }

  async function excluir(id) {
    await ExercicioService.remover(id);
    carregar();
  }

  return (
    <View>
      <Button mode='contained' onPress={() => navigation.navigate('ExercicioForm')}>Novo Exercício</Button>
      <FlatList
        data={exercicios}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card>
            <Card.Content>
              <Text>{item.nome}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('ExercicioForm', { exercicio: item })}>Editar</Button>
              <Button onPress={() => excluir(item.id)}>Excluir</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}
