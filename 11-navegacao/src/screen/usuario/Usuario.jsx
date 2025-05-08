import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default function Usuario({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Usuário 1</Title>
          <Paragraph>Este é um exemplo de usuário.</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Usuário 2</Title>
          <Paragraph>Este é outro exemplo de usuário.</Paragraph>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Endereco')}
        style={styles.button}
      >
        Ir para Endereço
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});