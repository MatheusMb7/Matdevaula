import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default function Feed({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Feed Item 1</Title>
          <Paragraph>This is a mock feed item content.</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Feed Item 2</Title>
          <Paragraph>This is another mock feed item content.</Paragraph>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Posts', { id: 1, nome: "João" })}
        style={styles.button}
      >
        Ir para Posts
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