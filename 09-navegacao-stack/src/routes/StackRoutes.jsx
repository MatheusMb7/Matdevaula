import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'


import HomeScreen from '../screens/HomeScreen'
import FeedScreen from '../screens/FeedScreen'
import PostsScreen from '../screens/PostsScreen'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>

      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Feed' component={FeedScreen} />
      <Stack.Screen name='Posts' component={PostsScreen} />

    </Stack.Navigator>
  )
}