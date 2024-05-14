import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react';
import Login from './src/Login/Login';
import Home from './src/Home/Home';
import Registro from './src/Registro/Registro';
import Item from './src/Item/Item';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabaseSync('db.testTb');
import { buscarDado } from './src/Infra/db';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dado: null,
      nomeItem: null
    }
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      name TEXT,
      email TEXT,
      password TEXT
    )
CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY,
      name TEXT,
      image TEXT,
      Date TEXT,
      Time TEXT
      )`
      )
    })
  }
  

render(){
  { buscarDado }
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
          options={{ headerShown: false, headerLeft: () => Home }}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
}
