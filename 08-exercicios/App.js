
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  { PaperProvider } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons'

import EscudoScreen from './componentes/screens/EscudoScreen'
import JogadoresScreen from './componentes/screens/JogadoresScreen';
import TitulosScreen from './componentes/screens/TitulosScreen';
import { color } from 'react-native/Libraries/NewAppScreen';




const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen
           name='Escudo'
            component={EscudoScreen}
            options={{
              title:'Palmeiras',
              headerTitleAlign:'center',
              headerTintColor: "#FFF",
              headerStyle: {
                fontfamily:'serif',
                backgroundColor:'#4E9F3D',
              },
              tabBarIcon: ({Color: size}) =><Ionicons name='shield' color={color} size={size}/>

            }} />

          <Tab.Screen 
          name='Jogadores'
          component={JogadoresScreen} 
          options={{
            title:'Jogadores',
            headerTitleAlign:'center',
            headerTintColor: "#FFF",
            headerStyle: {
              fontfamily:'Times New Roman',
              backgroundColor:'green',
            },
            tabBarIcon: ({Color: size}) =><Ionicons name='person' color={color} size={size}/>

          }} 
          />

          <Tab.Screen 
          name='Títulos' 
          component={TitulosScreen} 
          options={{
            title:'Títulos',
            headerTitleAlign:'center',
            headerTintColor: "#FFF",
            headerStyle: {
              backgroundColor:'#1E5128',
            },
            tabBarIcon: ({Color: size}) =><Ionicons name='trophy' color={color} size={size}/>

          }} 
          />

        </Tab.Navigator>
        </NavigationContainer>
    </PaperProvider>

  );
}

