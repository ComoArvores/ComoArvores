import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Como Árvores</Text>
      <TouchableOpacity onPress={() => console.log('Menu pressed')}>
        <Ionicons name="menu" size={24} color="white" style={styles.menuIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    paddingTop: 36,
    paddingLeft: 10,
    paddingRight: 10,
    paddingRight: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  menuIcon: {
    alignItems: 'flex-end',
  },
});

export default Header;
