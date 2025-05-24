import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { ActivityIndicator, Card, Text, MD2Colors } from 'react-native-paper'
import axios from 'axios'

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(res => setCategorias(res.data))
      .catch(() => alert('Erro ao buscar categorias'))
  }, [])

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Card style={{ margin: 5 }} onPress={() => navigation.navigate('ListaProdutosScreen', item)}>
            <Card.Content>
              <Text variant="titleMedium">{item}</Text>
            </Card.Content>
          </Card>
        )}
        ListEmptyComponent={() => (
          <ActivityIndicator animating={true} color={MD2Colors.red800} size={80} />
        )}
      />
    </View>
  )
}