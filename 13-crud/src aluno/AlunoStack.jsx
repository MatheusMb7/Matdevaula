import { createStackNavigator } from '@react-navigation/stack'

import AlunoForm from './AlunoForm'
import AlunoLista from './AlunoLista'

const Stack = createStackNavigator()

export default function AlunoStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name='AlunoLista'
        component={AlunoLista}
        options={{
          title: 'Lista de Alunos',
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen
        name='AlunoForm'
        component={AlunoForm}
        options={{
          title: 'Cadastro de Alunos',
          headerTitleAlign: 'center'
        }}
      />



    </Stack.Navigator>
  )
}