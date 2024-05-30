import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ItemAdmin() {
  const route = useRoute();
  const data = route.params;

  const handlePresence = () => {
    // Function logic here
  };

  const handleCertificate = () => {
    // Function logic here
  };

  const handleEvent = () => {
    // Function logic here
  };

  const eraseEvent = () => {
    // Function logic here
  };

  const saveEvent = () => {
    // Function logic here
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Data:</Text>
            <Text style={styles.text}>{data.Date}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Hora:</Text>
            <Text style={styles.text}>{data.Time}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Marcar presença" onPress={handlePresence} />
          <Button title="Gerar certificado" onPress={handleCertificate} />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleEvent}>
            <Image 
              source={{ uri: 'https://cdns.iconmonstr.com/wp-content/releases/preview/7.8.0/240/iconmonstr-pencil-square-lined.png' }}
              style={styles.icon} 
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={saveEvent}>
            <Image 
              source={{ uri: 'https://cdns.iconmonstr.com/wp-content/releases/preview/7.3.0/240/iconmonstr-star-lined.png' }}
              style={styles.icon} 
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={eraseEvent}>
            <Image 
              source={{ uri: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2017/240/iconmonstr-trash-can-28.png' }}
              style={styles.icon} 
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    paddingTop: 50,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  icon: {
    width: 50,
    height: 50,
  },
});
