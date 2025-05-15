import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  function gerarJogo() {
    let dezenas = [];
    while (dezenas.length < 6) {
      let numero = Math.floor(Math.random() * 60) + 1;
      if (!dezenas.includes(numero)) dezenas.push(numero);
    }

    dezenas.sort((a, b) => a - b);
    setJogoGerado(dezenas);
    setJogosMegaSena([...jogosMegaSena, dezenas]);
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Gerador Mega-Sena" />
        <Card.Content>
          <Text variant="titleLarge">Jogo Atual:</Text>
          <Text variant="displayMedium">{jogoGerado.join(' - ')}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={gerarJogo}>Gerar Jogo</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Histórico de Jogos" />
        <Card.Content>
          <FlatList
            data={jogosMegaSena}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Text>{index + 1}: {item.join(' - ')}</Text>
            )}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    paddingTop: 200,
  },
  card: {
    marginBottom: 10,
  },
  contentCenter: {
    alignItems: 'center',
  },
});
