import React from 'react';
import { View, Text, StyleSheet, Image, Button} from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Item() {

    const route = useRoute();
    const data = route.params;

    const handlePresence = () => {
        // Lógica para marcar presença
      };
    
      const handleCertificate = () => {
        // Lógica para gerar certificado
      };
    
      return (
        <View style={styles.container}>
        <Image source={{ uri: data.image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Date:</Text>
              <Text style={styles.text}>{data.Date}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Time:</Text>
              <Text style={styles.text}>{data.Time}</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Mark Presence" onPress={handlePresence} />
            <Button title="Generate Certificate" onPress={handleCertificate} />
          </View>
        </View>
      </View>
      );
    };
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f5f5f5',
            marginTop:50,
          },
          image: {
            width: 200, // Largura fixa
            height: 200, // Altura fixa
            alignSelf: 'center', // Alinhar a imagem ao centro
            borderRadius: 75, // Metade da largura para torná-la circular
            marginBottom: 10,
          },
          content: {
            flex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.8)', 
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
    });
    