import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Usuario from  '../screens/usuario/Usuario'
import Endereco from  '../screens/usuario/Endereco'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Usuario' component={Usuario} />
      <Stack.Screen name='Endereco' component={Endereco} />
    </Stack.Navigator>
  )
}