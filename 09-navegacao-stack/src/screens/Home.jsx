import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Home({ navigation, route }) {

  console.log('navigation => ', navigation)

  return (
    <View>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>

      <Button
        mode='contained'
        onPress={() => navigation.navigate('Feed', { id: 1, nome: "Pedro" })}
      >
        Ir para Feed
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({})