import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

export default function Atleta(props) {



    const {nome,idade,numero, imagem} = props

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Atleta</Text>

      <Text style={styles.texto}>NOME{nome}</Text>
      <Text style={styles.texto}>IDADE{idade}</Text>
      <Text style={styles.texto}>NUMERO{numero}</Text>
      <Image
      source={{
        uri: imagem
      }}
       style= {{
        height:280,
        width:280
      }}
      />


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'green',
        padding:20,
        borderWidth:10
    },
    texto:{
        fontSize:20,
        fontWeight:500
    }
})