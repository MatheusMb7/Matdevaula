import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar, Card, Text, Divider } from 'react-native-paper';
import axios from 'axios';

export default function UsuarioScreen({ route }) {
  const { userId } = route.params || {};
  const [usuario, setUsuario] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (userId) {
      axios.get(`https://dummyjson.com/users/${userId}`)
        .then(res => setUsuario(res.data))
        .catch(err => alert('Erro ao buscar usuário!'));

      axios.get(`https://dummyjson.com/users/${userId}/posts`)
        .then(res => setPosts(res.data.posts))
        .catch(err => alert('Erro ao buscar posts!'));
    }
  }, [userId]);

  return (
    <ScrollView>
      <Card>
        <Card.Title
          title={`${usuario.firstName || ''} ${usuario.lastName || ''}`}
          subtitle={usuario.email}
          left={(props) => <Avatar.Image {...props} source={{ uri: usuario.image }} />}
        />
        <Card.Content>
          <Text variant='titleMedium'>Username: {usuario.username}</Text>
          <Text>Idade: {usuario.age}</Text>
          <Text>Gênero: {usuario.gender}</Text>
          <Text>Telefone: {usuario.phone}</Text>
          <Divider />
          <Text variant='titleMedium'>Posts:</Text>
          {posts.map(post => (
            <View key={post.id}>
              <Text variant='titleSmall'>{post.title}</Text>
              <Text>{post.body}</Text>
              <Divider />
            </View>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
