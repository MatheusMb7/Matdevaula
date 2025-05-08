import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default function Endereco({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Endereço 1</Title>
          <Paragraph>Este é um exemplo de endereço.</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Endereço 2</Title>
          <Paragraph>Este é outro exemplo de endereço.</Paragraph>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        Voltar
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