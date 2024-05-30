import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ItemAdmin() {

  const route = useRoute();
  const data = route.params;

  const handlePresence = () => {

  };

  const handleCertificate = () => {

  };

  const handleEvent = () => {

  };

  const eraseEvent = () => {

  };

  const saveEvent = () => {

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
        <View style={styles.buttonContainer_2}>
          <TouchableOpacity onPress={() => handleEvent('Icone editar')}>
            <Image source={{ uri: 'https://cdns.iconmonstr.com/wp-content/releases/preview/7.8.0/240/iconmonstr-pencil-square-lined.png' }}
              style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => saveEvent('Icone estrela')}>
            <Image source={{ uri: 'https://cdns.iconmonstr.com/wp-content/releases/preview/7.3.0/240/iconmonstr-star-lined.png' }}
              style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => eraseEvent('Icone lixeira')}>
            <Image source={{ uri: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2017/240/iconmonstr-trash-can-28.png' }}
              style={{ width: 50, height: 50 }} />
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
    marginTop: 50,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: 75,
    marginBottom: 10,
  },
  content: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    padding: 20,
    margin: 20,
    marginTop: '15%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
  },
  buttonContainer_2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 250,
  },
});
