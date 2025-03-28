import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


export default function Series(props) {



    const {nome,ano, diretor, temporadas,capa} = props

  return (
    <View style={styles.container}>
      <Text style={styles.textoGrande}>Séries</Text>

      <Text style={styles.texto}>NOME:{nome}</Text>
      <Text style={styles.texto}>ANO:{ano}</Text>
      <Text style={styles.texto}>DIRETOR:{diretor}</Text>
      <Text style={styles.texto}>TEMPORADAS:{temporadas}</Text>
      <Image
      source={{
        uri: capa
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
        backgroundColor:'blue',
        padding:20,
        borderWidth:10
    },
    texto:{
        fontSize:20,
        fontWeight:500
    },
    textoGrande: {
      fontSize:30,
      fontWeight:400,
      color:'white'
    }
})