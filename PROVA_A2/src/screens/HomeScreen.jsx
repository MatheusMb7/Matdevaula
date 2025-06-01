import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ActivityIndicator, Card, Avatar, Text } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then(res => setUsuarios(res.data.users))
      .catch(err => alert('Erro ao buscar usuários!'));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title
              title={`${item.firstName} ${item.lastName}`}
              subtitle={item.email}
              left={(props) => <Avatar.Image {...props} source={{ uri: item.image }} />}
            />
          </Card>
        )}
        ListEmptyComponent={() => (
          <View style={styles.loading}>
            <ActivityIndicator size={50} />
            <Text>Aguarde...</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: { margin: 5 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
