import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Text, ActivityIndicator, MD2Colors } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(res => {
        // Se vier uma lista de objetos, use-a diretamente.
        const categoriasTratadas = Array.isArray(res.data)
          ? res.data.map(cat => (typeof cat === 'string' ? cat : cat.name))
          : [];

        setCategorias(categoriasTratadas);
      })
      .catch(() => alert('Erro ao carregar categorias'));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Card style={styles.card} onPress={() => navigation.navigate('ListaProdutosScreen', { categoria: item })}>
            <Card.Title title={item} />
          </Card>
        )}
        ListEmptyComponent={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator animating color={MD2Colors.red800} size={80} />
            <Text>Aguarde...</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 50,
  },
  card: {
    margin: 8,
  },
  loadingContainer: {
    height: 750,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
