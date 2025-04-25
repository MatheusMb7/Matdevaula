import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screens/HomeScreen';
import ReceitaScreen from '../screens/ReceitaScreen';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          title: 'Lista de Receitas',
          headerStyle: { backgroundColor: '#993399' },
          headerTitleAlign:'center',
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }} 
      />
      <Stack.Screen 
        name="Receita" 
        component={ReceitaScreen} 
        options={{ 
          title: 'Detalhes da Receita',
          headerStyle: { backgroundColor: '#8B0000' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }} 
      />
    </Stack.Navigator>
  );
}
