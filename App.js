/**
 * Props, Components, State (Basics)
 */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import ScrollingImg from './screens/Album';
import HelloWorld from './screens/Home';
import ViewImg from './screens/ViewImg';
import Icon from 'react-native-vector-icons/FontAwesome'
import RootNavigator from './navigation/RootNavigator';

Icon.loadFont();
const Stack = createNativeStackNavigator();

//export default MyApp = () => {
//  return <RootNavigator />;
//};

export default MyApp = () => {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Root"
            component={RootNavigator}
          />
          <Stack.Screen
            name="ViewImg"
            component={ViewImg}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ Provider>
  )
};