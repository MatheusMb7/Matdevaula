import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

import StackRoutes from './src/routes/StackRoutes';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
}