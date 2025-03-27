import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {

    console.log("propriedades =>" , props)



  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Perfil</Text>
      <Text style={styles.texto}>NOME:{props.nome}</Text>
      <Text style={styles.texto}>IDADE:{props.idade}</Text>
      <Text style={styles.texto}>TELEFONE:{props.telefone}</Text>
      <Text style={styles.texto}>EMAIL:{props.email}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
        borderWidth: 5,
        padding: 15
    },
    texto: {
        fontSize:20,
        fontWeight: 600

}
})