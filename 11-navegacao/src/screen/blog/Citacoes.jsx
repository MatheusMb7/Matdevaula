import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default function Citacoes({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Citação 1</Title>
          <Paragraph>Esta é uma citação de exemplo.</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Citação 2</Title>
          <Paragraph>Esta é outra citação de exemplo.</Paragraph>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Feed')}
        style={styles.button}
      >
        Ir para Feed
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