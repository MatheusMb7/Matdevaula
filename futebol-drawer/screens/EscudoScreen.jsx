import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';

export default function EscudoScreen() {
  const time = {
    nome: "Palmeiras",
    escudo: "https://i.pinimg.com/736x/96/a4/6d/96a46d845af876f648963f99df451e82.jpg",
    fundacao: "15 de novembro de 1895",
    estadio: "Allianz Parque",
    mascote: "Porco",
    cores: ["Verde", "Branco"]
  };


  const dados = [
    { id: '1', label: 'Nome', valor: time.nome },
    { id: '2', label: 'Fundação', valor: time.fundacao },
    { id: '3', label: 'Estádio', valor: time.estadio },
    { id: '4', label: 'Mascote', valor: time.mascote },
    { id: '5', label: 'Cores', valor: time.cores.join(', ') },
  ];

  return (
    <View style={styles.container}>
      <Image source={{ uri: time.escudo }} style={styles.escudo} />
      <FlatList
        data={dados}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.label}>{item.label}:</Text>
            <Text style={styles.valor}>{item.valor}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  escudo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  valor: {
    color: '#333',
  },
});