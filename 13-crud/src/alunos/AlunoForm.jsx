import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { Button, Text, TextInput } from 'react-native-paper'
import AlunoService from './AlunoService'


export default function AlunoForm({ navigation, route }) {

  const alunoAntigo = route.params || {}

  const [nome, setNome] = useState(alunoAntigo.nome || '')
  const [cpf, setCpf] = useState(alunoAntigo.cpf || '')
  const [email, setEmail] = useState(alunoAntigo.email || '')
  const [telefone, setTelefone] = useState(alunoAntigo.telefone || '')
  const [dataNascimento, setDataNascimento] = useState(alunoAntigo.dataNascimento || '')


  async function salvar() {
    const aluno = {
      nome,
      cpf,
      email,
      telefone,
      dataNascimento
    }

    if (!aluno.nome || !aluno.cpf || !aluno.email || !aluno.telefone || !aluno.dataNascimento) {
      alert('Preencha todos os campos!!!')
      return
    }

    if (alunoAntigo.id) {
      // Atualizar um aluno
      aluno.id = alunoAntigo.id
      await AlunoService.atualizar(aluno)
      alert('Aluno atualizado com sucesso')
      navigation.reset({
        index: 0,
        routes: [{ name: 'AlunoLista' }]
      })
    } else {


      await AlunoService.salvar(aluno)
      alert('Aluno criado com sucesso')
      navigation.reset({
        index: 0,
        routes: [{ name: 'AlunoLista' }]
      })
    }
  }


  return (
    <View style={styles.container}>
      <Text variant='titleLarge' style={{ marginTop: 10 }}>Informe os dados:</Text>
      <Text variant='titleLarge' style={{ marginTop: 10 }}>Aluno ID: {alunoAntigo.id || 'NOVO'}</Text>


      <TextInput
        label='Nome'
        style={styles.input}
        mode='outlined'
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        label='CPF'
        style={styles.input}
        mode='outlined'
        value={cpf}
        onChangeText={setCpf}
        keyboardType='numeric'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'cpf'}
          />
        )}
      />

      <TextInput
        label='E-mail'
        style={styles.input}
        mode='outlined'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />

      <TextInput
        label='Telefone'
        style={styles.input}
        mode='outlined'
        value={telefone}
        onChangeText={setTelefone}
        keyboardType='numeric'
        placeholder='(61)90000-0001'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }}
          />
        )}
      />

      <TextInput
        label='Data de Nascimento'
        style={styles.input}
        mode='outlined'
        value={dataNascimento}
        onChangeText={setDataNascimento}
        keyboardType='numeric'
        placeholder='01/01/2000'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'datetime'}
            options={{
              mask: 'DD/MM/YYYY'
            }}
          />
        )}
      />

      <Button
        style={styles.input}
        mode='contained'
        icon='plus'
        onPress={salvar}
      >
        Salvar
      </Button>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    width: '90%',
    marginTop: 10
  }
})