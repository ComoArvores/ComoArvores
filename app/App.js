import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react';
import Login from './src/Login/Login';
import Home from './src/Home/Home'
import HomeAdmin from './src/Home/HomeAdmin';
import Registro from './src/Registro/Registro';
import Item from './src/Item/Item';
import QuemSomosPage from './src/QuemSomos/QuemSomos';
import NovoEvento from './src/Eventos/NovoEvento';
import ItemAdmin from './src/itemAdmin/itemAdmin';

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
          options={{ headerShown: true, headerLeft: () => Login, title: "Eventos para comparecer" }}
        />
        <Stack.Screen
          name="HomeAdmin"
          component={HomeAdmin}
          options={{ headerShown: true, headerLeft: () => null, title: "Sessão Admin" }}
        />

        <Stack.Screen
          name="Item"
          component={Item}
          options={{ headerShown: false, headerLeft: () => Home }}
        />
        <Stack.Screen
          name="QuemSomos"
          component={QuemSomosPage}
          options={{ headerShown: false, headerLeft: () => Home }}
        />

        <Stack.Screen
          name="itemAdmin"
          component={ItemAdmin}
          options={{ headerShown: false, headerLeft: () => HomeAdmin }}
        />

        <Stack.Screen
          name="NovoEvento"
          component={NovoEvento}
          options={{ headerShown: false, headerLeft: () => HomeAdmin }}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

