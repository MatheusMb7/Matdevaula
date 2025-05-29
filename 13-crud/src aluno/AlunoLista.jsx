import { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

export default function AlunoLista({ navigation }) {

  const [alunos, setAlunos] = useState([
    {
      id: '1',
      nome: 'Gustavo',
      cpf: '001.001.001-10',
      email: 'gustavo@teste.com',
      telefone: '(61)90000-0001',
      dataNascimento: '02/02/2000'
    },
    {
      id: '2',
      nome: 'João',
      cpf: '001.001.001-11',
      email: 'joão@teste.com',
      telefone: '(61)90000-0002',
      dataNascimento: '02/02/2000'
    }
  ])


  return (
    <View>
      <Button
        style={{ margin: 10 }}
        mode='contained'
        icon='plus'
        onPress={() => navigation.navigate('AlunoForm')}
      >
        Cadastrar
      </Button>

      <FlatList
        data={alunos}
        renderItem={({ item }) => (
          <Card style={{ margin: 10 }}>
            <Card.Content>
              <Text>ID: {item.id}</Text>
              <Text>Nome: {item.nome}</Text>
              <Text>CPF: {item.cpf}</Text>
            </Card.Content>
            <Card.Actions>
              <Button icon='pencil'> </Button>
              <Button icon='delete'> </Button>
            </Card.Actions>
          </Card>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({})