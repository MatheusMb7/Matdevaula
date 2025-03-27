import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {
// logica do componente
const nome = 'Matheus Bruno'
const idade = 24

function checarMaiorIdade() {
    if(idade >= 18){
      return "Maior de Idade"
    } else {
      return "Menor de Idade"
    }
  }

  function alerta(){
    console.log("Clicou no botao")
    alert('Clique no botão!!!')
  }
// retorno jsx
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>JavaScriptComponente</Text>
      <Text style={styles.texto}>NOME: {nome}</Text>
      <Text style={styles.texto}>IDADE: {idade}</Text>
      <Text style={styles.texto}>IDADE: {idade + 40}</Text>
      <Text style={styles.texto}>Check 18+: {checarMaiorIdade()}</Text>
      <Button title='enviar' onPress={alerta} />
      


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'orange',
        borderWidth: 5,
        padding: 10

    },
    texto:{
        fontSize:20,
        fontWeight: 500
    }
    




})
