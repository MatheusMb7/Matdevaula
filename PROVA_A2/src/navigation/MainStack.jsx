import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import ExercicioForm from '../screens/ExercicioForm';
import TreinoForm from '../screens/TreinoForm';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="ExercicioForm" component={ExercicioForm} options={{ title: 'Exercício' }} />
      <Stack.Screen name="TreinoForm" component={TreinoForm} options={{ title: 'Treino' }} />
    </Stack.Navigator>
  );
}
