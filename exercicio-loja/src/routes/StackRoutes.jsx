import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ListaProdutosScreen from '../screens/ListaProdutosScreen';
import ProdutoScreen from '../screens/ProdutoScreen';

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'Categorias', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="ListaProdutosScreen"
        component={ListaProdutosScreen}
        options={{ title: 'Produtos', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="ProdutoScreen"
        component={ProdutoScreen}
        options={{ title: 'Detalhes do Produto', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
}