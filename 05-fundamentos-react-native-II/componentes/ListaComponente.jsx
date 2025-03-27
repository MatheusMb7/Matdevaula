import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {
    const listaCarros = ["gol", "palio", "Celta", "Voyage", "BYD", "Honda Civic"]



  return (
    <View style={styles.container}>

      {listaCarros.map(
        carro => <Text>{carro}</Text>
      )
      }

{
    listaCarros.map(
        (carro) => {
            return (
                <View style={styles.containerAmarelo}>
                    <Text>{carro}</Text>
                </View>
            )
        }
    )
}


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        borderWidth: 10,
        padding: 15
    },
    texto: {
        fontSize: 20,
        fontWeight: 500
    },
   containerAmarelo: {
    backgroundColor:'yellow',
    borderWidth:5,
    padding: 15

   }

})