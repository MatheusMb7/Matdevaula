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
    }else {
            return "Menor de Idade"
        }
    }
  
    return (
    <View>
      <Text>JavaScript Componente</Text>
      <Text>nome: {nome}</Text>
      <Text>idade: {idade}</Text>
      <Text>{exibirNome()}</Text>
      <Text>resultado: {25+31}</Text>
      <Text> Idade: {idade + 20}</Text>
      <Text>Check 18+ : {checarMaiorIdade()}</Text>
      <Text>Check 18+ : {idade >= 18 ? "Maior de idade" : "Menor de idade"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})