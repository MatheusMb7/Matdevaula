import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Card, Button } from 'react-native-paper'

export default function ListaScreen({ navigation, route }) {

  const carros = [
    {
      id: 1,
      nome: 'Fusca',
      ano: 1968,
      cor: 'azul'
    },
    {
      id: 2,
      nome: 'Civic',
      ano: 2020,
      cor: 'preto'
    },
    {
      id: 3,
      nome: 'Corolla',
      ano: 2021,
      cor: 'branco'
    }
  ]


  return (
    <View>

      <FlatList

        data={carros}
        renderItem={({ item }) => (
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
                icon={'arrow-right'}
                onPress={() => navigation.navigate('ItemScreen', { item })}
              >
                Ver Detalhes
              </Button>
            </Card.Actions>
          </Card>
        )}
      />



    </View>
  )
}

const styles = StyleSheet.create({})