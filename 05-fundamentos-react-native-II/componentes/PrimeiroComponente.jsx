import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PrimeiroComponente() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoGrande}>Primeiro componente</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        padding: 20,
        borderWidth: 10
            },   
            textoGrande: {
        fontSize:20,
        fontWeight: 600
      }
     
})
    