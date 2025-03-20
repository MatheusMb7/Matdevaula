import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, } from 'react-native';

// principal componente
// Ele deve retornar o que será renderizado na tela(templete feito com JSX)
export default function App() {

  // Lógica do componente
  const nome = "Cristiano Ronaldo"

  function alerta() {
    alert("Gol do palmeiras,  CRISTIANO RONALDO é o nome dele!!!")
  }

  // retorno com SX
  return (
    <ScrollView>
      <View style={styles.container}>
    

    {/* Comentario do template JSX */}

    {/* Còdigo Javascript */}

    
    <Text style={styles.textoGrande}>{nome}</Text>
    <Text style={styles.textoGrande}>{3 + 4}</Text>
    

    <Image
       source={{uri: 'https://i.pinimg.com/736x/fb/19/c4/fb19c40530191fd984f4e2b43593ddf4.jpg'}} 
       style={{ 
         height: 300,
         width: 300,  
      }}
    />
    <Text style={styles.textoMedio}>Cristiano Ronaldo dos Santos Aveiro é um futebolista português que atua como ponta-esquerda ou avançado.</Text>

<Image
       source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbpyOnkhD2-tBCVJPrl6T7q3HiGXp3_SClQ&s'}} 
       style={{ 
         height: 300,
         width: 300,  
      }}
    />
<Text style={styles.textoMedio}>Salário: 200 milhões EUR (2024)</Text>
    <Image
    source={require('./imagens/image.png')}  
    style={{
      height: 300,
      width: 300,
    }}    
   />

    <Text style={styles.textoMedio}>Altura: 1,89 m</Text>
    
    <Image
    source={require('./imagens/image2.png')}  
    style={{
      height: 300,
      width: 300,
    }}    
    />

<Text style={styles.textoMedio}>Peso: 83 kg</Text>
    
    <Image
    source={require('./imagens/image3.png')}  
    style={{
      height: 300,
      width: 300,
    }}    
    />

<Button title='GOOL' onPress={alerta} color="#8AB2A6"></Button>

    <StatusBar style="auto" />
  </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F7D58',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    fontStyle:'italic',

  },
  textoGrande: {
    fontSize: 30,
    fontWeight: 900,
    fontStyle: 'italic'
  },
  textoMedio: {
    fontSize: 20,
    fontWeight: 500,
    fontStyle: 'italic'
  }
});
