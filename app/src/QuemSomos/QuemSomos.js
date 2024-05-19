import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const QuemSomosPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3h52Uo7WgTm6XCS3FzEnQwWWIqS0KJQjIIc-mftXeQ&s' }}
          style={styles.image}
        />
      </View>
        <Text style={styles.title}>
        Quem somos?
        </Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
        Somos uma equipe dedicada e apaixonada por oferecer soluções criativas e inovadoras para os desafios do mundo moderno. Movidos pela curiosidade e pelo desejo de fazer a diferença, buscamos constantemente novas maneiras de inspirar, informar e impactar positivamente àqueles ao nosso redor.
          
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8e6c9',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin: 20,
    borderRadius: 30,
  },
  image: {
    width: 150,
    height: 150,
  },
  textContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    width: '90%',
  },
  text: {
    color: 'black',
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#386641',
    }
});

export default QuemSomosPage;

