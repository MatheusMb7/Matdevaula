import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

export default function JogadoresScreen() {
  const jogadores = [
    {
      nome: "Gabriel Barbosa",
      numero: 9,
      posicao: "Atacante",
      idade: 27,
      imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg"
    },
    {
      nome: "Arrascaeta",
      numero: 14,
      posicao: "Meia",
      idade: 29,
      imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg"
    },
    {
      nome: "Everton Ribeiro",
      numero: 7,
      posicao: "Meia",
      idade: 33,
      imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg"
    },
    {
      nome: "David Luiz",
      numero: 23,
      posicao: "Zagueiro",
      idade: 35,
      imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg"
    },
    {
      nome: "Pedro",
      numero: 21,
      posicao: "Atacante",
      idade: 26,
      imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg"
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>Número: {item.numero}</Text>
              <Text>Posição: {item.posicao}</Text>
              <Text>Idade: {item.idade}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  imagem: {
    width: 100,
    height: 100,
  },
  info: {
    padding: 10,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});