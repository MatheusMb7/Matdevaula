import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Feed({ navigation, route }) {

  console.log("PARAMS => ", route.params)


  return (
    <View>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>

      <Text>Parametro Recebido: {route.params.nome}</Text>

      <Button
        mode='contained'
        onPress={() => navigation.navigate('Posts')}
      >
        Ir para Posts
      </Button>

      <Button
        mode='contained'
        onPress={() => navigation.goBack()}
      >
        Voltar
      </Button>


    </View>
  )
}

const styles = StyleSheet.create({})