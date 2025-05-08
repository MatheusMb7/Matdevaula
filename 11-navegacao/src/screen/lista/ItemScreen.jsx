import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper'

export default function ItemScreen({ navigation, route }) {

  const { item } = route.params
  console.log(item)


  return (
    <View>
      <Card style={{ margin: 10 }}>
        <Card.Content>
          <Text>Carro: {item.nome}</Text>
          <Text>Ano: {item.ano}</Text>
          <Text>Cor: {item.cor}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            contentStyle={{ flexDirection: 'row-reverse' }}
            mode='contained'
            icon={'arrow-left'}
            onPress={() => navigation.goBack()}
          >
            Voltar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  )
}