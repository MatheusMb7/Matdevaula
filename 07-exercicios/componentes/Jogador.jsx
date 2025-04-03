import React from 'react'
import { StyleSheet } from 'react-native'
import { Avatar, Card } from 'react-native-paper'

export default function Jogador(props) {

  const { nome, imagem } = props

  return (
    <Card.Title
      style={{ margin: 10 }}
      title={nome}
      left={(props) => <Avatar.Image {...props} source={{ uri: imagem }} />}
    />
  )
}

const styles = StyleSheet.create({})