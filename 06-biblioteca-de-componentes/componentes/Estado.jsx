import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import React from 'react'
import Municipios from './Municipios'

export default function Estado(props) {
    const [nome, sigla, imagem, descricao, municipios] = props
    return (
        <Card style={{margin: 10 }}>
      <Card.Title title={nome} subtitle={sigla}/>
      <Card.Content>
        <Text>Descrição:{descricao}</Text>
      </Card.Content>
      <Card.Cover source={{uri: imagem}}/>
      <Card.Actions>
        <FlatList
        horizontal
        data={municipio}
        renderItem={({item}) => (
            <Municipios
            nome={item.nome}
            imagem={item.imagem}
            />
        )}
        />
      </Card.Actions>
</Card>

    )
}

const styles = StyleSheet.create({})