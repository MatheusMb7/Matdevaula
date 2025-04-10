import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  { PaperProvider } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import { color } from 'react-native/Libraries/NewAppScreen';




const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen
           name='HomeScreen'
            component={HomeScreen}
            options={{
              title:'Tela de Ìnicio',
              headerTitleAlign:'center',
              headerStyle: {
                backgroundColor:'tomato',
              },
              tabBarIcon: ({Color: size}) =><Ionicons name='home' color={color} size={size}/>

            }} />

          <Tab.Screen 
          name='ProfileScreen'
          component={ProfileScreen} 
          options={{
            title:'Tela de Ìnicio',
            headerTitleAlign:'center',
            headerStyle: {
              backgroundColor:'tomato',
            },
            tabBarIcon: ({Color: size}) =><Ionicons name='person' color={color} size={size}/>

          }} 
          />

          <Tab.Screen 
          name='SettingsScreen' 
          component={SettingsScreen} 
          options={{
            title:'Tela de Ìnicio',
            headerTitleAlign:'center',
            headerStyle: {
              backgroundColor:'tomato',
            },
            tabBarIcon: ({Color: size}) =><Ionicons name='cog' color={color} size={size}/>

          }} 
          />

        </Tab.Navigator>
        </NavigationContainer>
    </PaperProvider>

  );
}

