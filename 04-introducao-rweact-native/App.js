import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

// principal componente
// Ele deve retornar o que será renderizado na tela(templete feito com JSX)
export default function App() {

  // Lógica do componente
  const nome = "Matheus Bruno"

  function alerta() {
    alert("Vôce clicou no botão,agora é PALMEIRAS")
  }

  // retorno com SX
  return (
    <View style={styles.container}>

      {/* Comentario do template JSX */}

      {/* Còdigo Javascript */}

      <Text>{2 + 2}</Text>
      <Text>{nome}</Text>

      <Text>PALMEIIRAS!</Text>
      <Text>PALMEIIRAS!</Text>
      <Text>PALMEIIRAS!</Text>
      <Text>PALMEIIRAS!</Text>
      <Text>PALMEIIRAS!</Text>

      <Button title='Se clicar é Palmeirense' onPress={alerta}></Button>

      <Image
        source={{ uri: 'https://w7.pngwing.com/pngs/373/882/png-transparent-sociedade-esportiva-palmeiras-campeonato-brasileiro-serie-a-campeonato-paulista-sport-club-corinthians-paulista-paulista-derby-others.png' }}
        style={{
          height: 300,
          width: 300
        }}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff7f',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
