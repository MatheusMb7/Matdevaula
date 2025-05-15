import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import JogoDoBichoScreen from "./screens/JogoDoBichoScreen";
import MegaSenaScreen from "./screens/MegaSenaScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Mega-Sena') iconName = 'numeric';
              else if (route.name === 'Jogo do Bicho') iconName = 'paw';

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen name="Mega-Sena" component={MegaSenaScreen} />
          <Tab.Screen name="Jogo do Bicho" component={JogoDoBichoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
