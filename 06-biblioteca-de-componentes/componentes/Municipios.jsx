import { StyleSheet, Text, View } from 'react-native'
import { Card, Avatar } from 'react-native-paper'
import React from 'react'

const {nome, imagem} = props

export default function Municipios(props) {
  return (

   <Card.Title
   style={{margin: 10}}
   title={nome}
   left={(props) => <Avatar.Image {...props} source={{uri: imagem}}/>}
   />

  )
}

const styles = StyleSheet.create({})