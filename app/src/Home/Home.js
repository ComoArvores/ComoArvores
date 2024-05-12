import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation(); // Obtenha o objeto de navegação

    const handleItem = (item) => {
        navigation.navigate('Item', {
            name: item.name,
            image: item.image,
            Date: item.Date,
            Time: item.Time
        });
    };


    state = {
        events: [
            {
                id: 0,
                name: "As Árvores e a Arte no Processo de Transformação Pessoal",
                image: "https://picsum.photos/204",
                Date: "06/04/2024",
                Time: "9:00 as 10:00"
            },
            {
                id: 1,
                name: "A Importância das Árvores na Saúde Mental",
                image: "https://picsum.photos/203",
                Date: "07/04/2024",
                Time: "14:00 as 15:00"
            },
            {
                id: 2,
                name: "Como as Árvores Contribuem para o Bem-Estar da Comunidade",
                image: "https://picsum.photos/202",
                Date: "08/04/2024",
                Time: "16:00 as 17:00"
            },
            {
                id: 3,
                name: "A Importância da Preservação das Árvores Nativas",
                image: "https://picsum.photos/201",
                Date: "09/04/2024",
                Time: "10:00 as 11:00"
            },
            {
                id: 4,
                name: "Construindo um Futuro Sustentável com o Plantio de Árvores",
                image: "https://picsum.photos/200",
                Date: "10/04/2024",
                Time: "13:00 as 14:00"
            }
        ]
    };
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            {this.state.events.map((item, index) => (
                <TouchableOpacity
                    key={item.id}
                    onPress={() => handleItem(item)}
                    style={styles.touchableItem}
                >

                    <Text style={styles.title}>{item.name}</Text>
                    <Image style={styles.imageFrame} source={{ uri: item.image }} />
                    <Text style={styles.infoText}>{item.Date}</Text>
                    <Text style={styles.infoText}>{item.Time}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableItem: {
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#2e7d32',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        backgroundColor: '#c8e6c9',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#386641',
    },
    imageFrame: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    infoText: {
        color: '#6a994e',
    }
});