import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

// principal componente
// Ele deve retornar o que será renderizado na tela(templete feito com JSX)
export default function App() {

  // Lógica do componente
  const nome = "Aplicativo"

  function alerta() {
    alert("Esse pe meu aplicativo")
  }

  // retorno com SX
  return (
    <View style={styles.container}>

      {/* Comentario do template JSX */}

      {/* Còdigo Javascript */}

      <Text>{2 + 2}</Text>
      <Text>{nome}</Text>

      <Text>Palmeiras</Text>
      <Text>Palmeiras</Text>
      <Text>Palmeiras</Text>
      <Text>Palmeiras</Text>
      <Text>Palmeiras</Text>
    

      <Button title='Clique' onPress={alerta}></Button>

      <Image
         source={require('./assets/casal.jpg')} 
         style={{ 
           height: 300,
           width: 300,  
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
