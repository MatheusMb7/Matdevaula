import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

export default function TitulosScreen() {
  const titulos = [
    {
      nome: "Campeonato Brasileiro",
      anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
    },
    {
      nome: "Copa Libertadores da América",
      anos: [1981, 2019, 2022]
    },
    {
      nome: "Copa do Brasil",
      anos: [1990, 2006, 2013, 2022, 2024]
    },
    {
      nome: "Supercopa do Brasil",
      anos: [2020, 2021, 2025]
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={titulos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.titulo}>{item.nome}</Text>
            <Text style={styles.anos}>Anos: {item.anos.join(', ')}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  anos: {
    marginTop: 4,
    color: '#444',
  },
});