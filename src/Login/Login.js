import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Login() {
    const navigation = useNavigation(); // Obtenha o objeto de navegação

    const handleLogin = () => {
        navigation.navigate('Home');
    };
    const handleRegistro = () => {
        navigation.navigate('Registro');
    };


    return (
        <View style={style.container}>
            <Text style={style.formTitle}>Como Arvores</Text>
            <TextInput style={style.formInput}
                placeholder="Informe o E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCompleteType="email"
            />
            <TextInput style={style.formInput}
                placeholder="Informe a Senha"
                autoCapitalize="none"
                secureTextEntry
            />
            <Pressable style={style.formButton} onPress={handleLogin}>
                <Text style={style.textButton}>Entrar</Text>
            </Pressable>
            <Pressable style={style.formButton} onPress={handleRegistro}>
                <Text style={style.textButton}>Registrar-se</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    );
};
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    formTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'green',
        margin: 10,
    },

    formInput: {
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 50,
        fontSize: 20,
        width: '80%',
        padding: 10,
        margin: 10,
    },

    formButton: {
        backgroundColor: 'green',
        width: '80%',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },

    textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },

    subButton: {
        padding: 10,
    },

    subTextButton: {
        color: 'green',
    },
});