import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import Icon from 'react-native-vector-icons/MaterialIcons'
// import screens
import Album from '../screens/Album';
import Home from '../screens/Home';
import Movies from '../screens/Movie';
import Favorites from '../screens/Favorites';

MaterialIcons.loadFont();
const Tab = createBottomTabNavigator();
const tabBarOptions =
{
    tabBarActiveTintColor: "#fbc8c0",
    tabBarShowLabel: false,
    tabBarStyle: [
        {
            "display": "flex"
        },
        null
    ],
    showLabel: false
};
const user = "Timmy";
const RootNavigator = () => {
    return (
            <Tab.Navigator screenOptions={{ headerShown: false, showLabel: false, tabBarShowLabel: false}}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color="#fbc8c0" size={size} />
                    )
                }}
                initialParams={{ user: user }}
            />
            <Tab.Screen
                name="Album"
                component={Album}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="photo-library" color="#f0c4dd" size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Movies"
                component={Movies}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="movie-filter" color="#c9fceb" size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="favorite" color="#d7e2f8" size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
  );
};
export default RootNavigator;
