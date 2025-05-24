import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Card, Text, Divider, ActivityIndicator, MD2Colors } from 'react-native-paper'
import axios from 'axios'

export default function ProdutoScreen({ route }) {
  const idProduto = route.params
  const [produto, setProduto] = useState(null)

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/{idProduto}`)
      .then(res => setProduto(res.data))
      .catch(() => alert('Erro ao buscar produto'))
  }, [])

  if (!produto) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating={true} color={MD2Colors.red800} size={80} />
        <Text variant="titleMedium">Carregando...</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <Card style={{ margin: 10 }}>
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Content>
          <Text variant="titleLarge">{produto.title}</Text>
          <Text>{produto.description}</Text>
          <Divider style={{ marginVertical: 10 }} />
          <Text>Preço: R$ {produto.price}</Text>
          <Text>Marca: {produto.brand}</Text>
          <Text>Categoria: {produto.category}</Text>
          <Text>Estoque: {produto.stock}</Text>
          <Text>Avaliação: {produto.rating}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}
