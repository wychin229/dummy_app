/**
 * Props, Components, State (Basics)
 */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScrollingImg from './screens/album';
import HelloWorld from './screens/home';
import ViewImg from './screens/viewimg';
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont();
const Stack = createNativeStackNavigator();
const user = "Timmy";

export default MyApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={HelloWorld}
          options={{ title: 'Hi ' + user }} initialParams={{ user: user }} />
        <Stack.Screen
          name="Album"
          component={ScrollingImg}
        />
        <Stack.Screen
          name="ViewImg"
          component={ViewImg}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};