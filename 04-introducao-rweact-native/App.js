import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

// principal componente
// Ele deve retornar o que será renderizado na tela(templete feito com JSX)
export default function App() {

  // Lógica do componente
  const nome = "JULIANA RUTE"

  function alerta() {
    alert("Vôce é o amor da minha vidaa")
  }

  // retorno com SX
  return (
    <View style={styles.container}>

      {/* Comentario do template JSX */}

      {/* Còdigo Javascript */}

      <Text>{2 + 2}</Text>
      <Text>{nome}</Text>

      <Text>O  que falar de vc, uma mulher tão perfeita tão maravilhosa, tão íncrivel, quero que daiba que sou erternamente grato e te amo demais, muito obrigado por tudoo!!!</Text>
    

      <Button title='clique' onPress={alerta}></Button>

      <Image
         source={require('./assets/casal.jpg')}  // Caminho correto para a imagem
         style={{ 
           height: 300,  // Tamanho da imagem
           width: 300,   // Tamanho da imagem
        }}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8A2C8',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
