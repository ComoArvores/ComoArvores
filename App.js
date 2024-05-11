import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react';
import Login from './src/Login/Login';
import Home from './src/Home/Home';
import Registro from './src/Registro/Registro';
import Item from './src/Item/Item';


const Stack = createStackNavigator();

export default function App() {
  let header = false;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true, headerLeft: () => null, title: "Eventos" }}
        />

        <Stack.Screen
          name="Item"
          component={Item}
          options={{ headerShown: true, headerLeft: () => Home }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}