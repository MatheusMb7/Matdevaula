import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import ItemScreen from '../screens/lista/ItemScreen'
import ListaScreen from '../screens/lista/ListaScreen'

const Stack = createStackNavigator()

export default function ListaStackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ListaScreen' component={ListaScreen} />
      <Stack.Screen name='ItemScreen' component={ItemScreen} />
    </Stack.Navigator>
  )
}