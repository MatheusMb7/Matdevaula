import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Card, Text, Avatar, IconButton, MD2Colors } from 'react-native-paper';
import axios from 'axios';

export default function ListaProdutosScreen({ navigation, route }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then(res => setProdutos(res.data.products))
      .catch(() => alert('Erro ao carregar produtos'));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card} onPress={() => navigation.navigate('ProdutoScreen', { idProduto: item.id })}>
            <Card.Title
              title={item.title}
              subtitle={`R$ ${item.price}`}
              left={(props) => <Avatar.Image {...props} source={{ uri: item.thumbnail }} />}
              right={(props) => <IconButton icon="chevron-right" {...props} />}
            />
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
