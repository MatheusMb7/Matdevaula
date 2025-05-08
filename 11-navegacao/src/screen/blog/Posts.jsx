import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default function Posts({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Post 1</Title>
          <Paragraph>This is a mock post content.</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Post 2</Title>
          <Paragraph>This is another mock post content.</Paragraph>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Citacoes')}
        style={styles.button}
      >
        Ir para Citações
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