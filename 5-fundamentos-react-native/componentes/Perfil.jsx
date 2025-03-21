import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {

    console.log(props)
  return (
    <View>
      <Text>Perfil</Text>
      <Text>{props.nome}</Text>
      <Text>{props.sobrenome}</Text>
      <Text>{props.idade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})