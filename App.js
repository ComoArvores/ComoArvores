import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import HomeItens from './Components/HomeItens';

export default function App() {
  return (
    <View >
      <Header></Header>
      <HomeItens></HomeItens>
    </View>
  );
}