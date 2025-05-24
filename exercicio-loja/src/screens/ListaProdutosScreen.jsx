import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { ActivityIndicator, Card, Text, Avatar, IconButton, MD2Colors } from 'react-native-paper'
import axios from 'axios'

export default function ListaProdutosScreen({ navigation, route }) {
  const categoria = route.params
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then(res => setProdutos(res.data.products))
      .catch(() => alert('Erro ao buscar produtos'))
  }, [])

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={{ margin: 5 }} onPress={() => navigation.navigate('ProdutoScreen', item.id)}>
            <Card.Title
              title={item.title}
              subtitle={`R$ ${item.price}`}
              left={(props) => <Avatar.Image {...props} source={{ uri: item.thumbnail }} />}
              right={(props) => <IconButton icon="chevron-right" {...props} />}
            />
          </Card>
        )}
        ListEmptyComponent={() => (
          <ActivityIndicator animating={true} color={MD2Colors.red800} size={80} />
        )}
      />
    </View>
  )
}