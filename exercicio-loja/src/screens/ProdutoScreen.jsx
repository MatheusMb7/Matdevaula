import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, ActivityIndicator, MD2Colors } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route }) {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(res => setProduto(res.data))
      .catch(() => alert('Erro ao carregar produto'));
  }, []);

  if (!produto) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating color={MD2Colors.red800} size={80} />
        <Text>Aguarde...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Title title={produto.title} subtitle={`R$ ${produto.price}`} />
        <Card.Content>
          <Text variant='titleMedium'>Descrição:</Text>
          <Text>{produto.description}</Text>
          <Text variant='titleMedium' style={styles.topSpace}>Marca:</Text>
          <Text>{produto.brand}</Text>
          <Text variant='titleMedium' style={styles.topSpace}>Categoria:</Text>
          <Text>{produto.category}</Text>
          <Text variant='titleMedium' style={styles.topSpace}>Estoque:</Text>
          <Text>{produto.stock} unidades</Text>
          <Text variant='titleMedium' style={styles.topSpace}>Desconto:</Text>
          <Text>{produto.discountPercentage}%</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSpace: {
    marginTop: 10,
  },
});