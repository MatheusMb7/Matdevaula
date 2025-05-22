import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Avatar, Card, Divider, Text } from 'react-native-paper'

export default function UsuarioScreen({ navigation, route }) {

  const idUsuario = route.params
  const [usuario, setUsuario] = useState({})
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/users/' + idUsuario)
      .then(resposta => {
        console.log(resposta.data)
        setUsuario(resposta.data)
      })
      .catch(erro => alert('Ocorreu um erro ao buscar usuario'))

    axios.get('https://dummyjson.com/users/' + idUsuario + '/posts')
      .then(resposta => {
        console.log(resposta.data.posts)
        setPosts(resposta.data.posts)
      })
      .catch(erro => alert('Ocorreu um erro ao buscar posts'))

  }, [])



  return (
    <View>
      <Card>
        <Card.Title
          title={usuario.firstName + " " + usuario.lastName}
          subtitle={usuario.email}
          left={(props) => <Avatar.Image {...props} source={{ uri: usuario.image }} />}
        />
        <Card.Content>
          <Text variant='titleMedium'>Dados do Usuário:</Text>
          <Text>Username: {usuario.username}</Text>
          <Text>Idade: {usuario.age}</Text>
          <Text>Gênero: {usuario.gender}</Text>
          <Text>Telefone: {usuario.phone}</Text>
          <Text>Data de Nascimento: {usuario.birthDate}</Text>
          <Text>Universidade: {usuario.university}</Text>
          <Text> </Text>
          <Text variant='titleMedium'>Imagem do Usuário:</Text>
          <Card.Cover source={{ uri: usuario.image }} />
          <Text> </Text>
          <Text variant='titleMedium'>Posts:</Text>
          {posts.map(post => (
            <View>
              <Text variant='titleSmall'>{post.title}</Text>
              <Text>{post.body}</Text>
              <Divider />
            </View>
          ))}

        </Card.Content>
      </Card>
    </View>
  )
}