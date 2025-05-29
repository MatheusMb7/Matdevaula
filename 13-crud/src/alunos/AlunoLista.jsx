import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'
import AlunoService from './AlunoService'

export default function AlunoLista({ navigation , route }) {

  const [alunos, setAlunos] = useState([])
  
  useEffect(() => {
    buscarAlunos()
  }, [])

  async function buscarAlunos(){
    const listaAlunos = await AlunoService.listar()
    setAlunos(listaAlunos)
  }


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