import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default function Configuracoes({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Configuração 1</Title>
          <Paragraph>Esta é uma configuração de exemplo.</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Configuração 2</Title>
          <Paragraph>Esta é outra configuração de exemplo.</Paragraph>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => navigation.openDrawer()}
        style={styles.button}
      >
        Abrir gaveta
      </Button>

      <Button
        mode="contained"
        onPress={() => {
          navigation.openDrawer();
          setTimeout(() => {
            navigation.closeDrawer();
          }, 2000);
        }}
        style={styles.button}
      >
        Abrir gaveta e Fechar Automatico
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