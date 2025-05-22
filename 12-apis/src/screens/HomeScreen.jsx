import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ActivityIndicator, Avatar, Card, IconButton, MD2Colors, Text } from 'react-native-paper'

export default function HomeScreen() {
  // Um estado para armazenar os usuário recebidos
  const [usuarios, setUsuarios] = useState([])

  // Faz algo quando o componente é montado
  useEffect(() => {
    axios.get("https://dummyjson.com/users?delay=2000")
      .then(resposta => {
        console.log(resposta.data.users)
        setUsuarios(resposta.data.users)
      })
      .catch(erro => {
        alert('Erro ao comunicar com a API!!!')
      })
  }, [])

  return (
    <View style={styles.container}>

      <FlatList
        data={usuarios}
        renderItem={({ item }) => (
          <Card style={{ margin: 5 }}>
            <Card.Title
              title={item.firstName + " " + item.lastName}
              subtitle={item.email}
              left={(props) => <Avatar.Image {...props} source={{ uri: item.image }} />}
              right={(props) => <IconButton icon="chevron-right" size={30} />}
            />
          </Card>
        )}
        ListEmptyComponent={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator animating={true} color={MD2Colors.red800} size={80} />
            <Text variant='titleLarge'>Aguarde...</Text>
          </View>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 50
  },
  loadingContainer: {
    height: 750,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
