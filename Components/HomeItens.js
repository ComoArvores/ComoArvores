import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

class HomeItens extends Component {
    state = {
        events: [
            {
                id: 0,
                name: "As Árvores e a Arte no Processo de Transformação Pessoal",
                image: "https://picsum.photos/200",
                Date: "06/04/2024",
                Time: "9:00 as 10:00"
            },
            {
                id: 1,
                name: "A Importância das Árvores na Saúde Mental",
                image: "https://picsum.photos/200",
                Date: "07/04/2024",
                Time: "14:00 as 15:00"
            },
            {
                id: 2,
                name: "Como as Árvores Contribuem para o Bem-Estar da Comunidade",
                image: "https://picsum.photos/200",
                Date: "08/04/2024",
                Time: "16:00 as 17:00"
            },
            {
                id: 3,
                name: "A Importância da Preservação das Árvores Nativas",
                image: "https://picsum.photos/200",
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
    render() {
        return (
            <ScrollView>
                <View>
                    {
                        this.state.events.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    onPress={() => { console.log("Apertou no ", item.name) }}
                                    style={styles.touchableOpacityContainer}>
                                    <Text style={styles.TitleEvent}>{item.name}</Text>
                                    <Image style={styles.ImageFrame} source={{ uri: item.image }} />
                                    <Text>{item.Date}</Text>
                                    <Text>{item.Time}</Text>
                                </TouchableOpacity >

                            )
                    })
                    }
                </View >
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    touchableOpacityContainer: {
        alignItems: 'center',
        paddingBottom: 10, borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    TitleEvent: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    ImageFrame: {
        width: 200,
        height: 200
    }
});

export default HomeItens;
