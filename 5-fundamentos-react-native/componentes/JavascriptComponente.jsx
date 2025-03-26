import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {
  const nome = "Matheus Bruno"
  const idade = 25
  
  function exibirNome() {
    return nome
  }

  function checarMaiorIdade() {
    if(idade >= 18){
      return "Maior de Idade"
    } else {
      return "Menor de Idade"
    }
  }
  
  return (
    <View style={styles.container}>
      <Text>JavaScript Componente</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Exibir Nome: {exibirNome()}</Text>
      <Text>Resultado 25+31: {25 + 31}</Text>
      <Text>Idade + 20: {idade + 20}</Text>
      <Text>Check 18+: {checarMaiorIdade()}</Text>
      <Text>Check 18+: {idade >= 18 ? "Maior de idade" : "Menor de idade"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
})
