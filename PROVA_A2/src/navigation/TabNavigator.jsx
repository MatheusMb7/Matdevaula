import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import UsuarioScreen from '../screens/UsuarioScreen';
import TreinoLista from '../screens/TreinoLista';
import ExercicioLista from '../screens/ExercicioLista';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Usuário" component={UsuarioScreen} />
      <Tab.Screen name="Treinos" component={TreinoLista} />
      <Tab.Screen name="Exercícios" component={ExercicioLista} />
    </Tab.Navigator>
  );
}