import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TextInput, Pressable, Alert, Text, View } from 'react-native'; // Removido StatusBar duplicado
import React, { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        if (email.trim() === '') {
            Alert.alert('Erro', 'Por favor, preencha o campo de e-mail.');
        } else if (!isValidEmail(email)) {
            Alert.alert('Erro', 'Por favor, insira um email válido.');
        } else {
            navigation.navigate('Home');
        }
    };


    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const navigation = useNavigation();

    const handleRegistro = () => {
        navigation.navigate('Registro');
    };
    const handleAdmin = () => {
        navigation.navigate('HomeAdmin');
    const handleSobre = () => {
        navigation.navigate('QuemSomos');
    };


    return (
        <View style={style.container}>
            <Text style={style.formTitle}>Como Arvores</Text>
            <TextInput
                style={style.formInput}
                placeholder="Informe o E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCompleteType="email"
                value={email} 
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={style.formInput}
                placeholder="Informe a Senha"
                autoCapitalize="none"
                secureTextEntry
                value={senha}
                onChangeText={text => setSenha(text)}
            />
            <Pressable style={style.formButton} onPress={handleLogin}>
                <Text style={style.textButton}>Entrar</Text>
            </Pressable>
            <Pressable style={style.formButton} onPress={handleRegistro}>
                <Text style={style.textButton}>Registrar-se</Text>
            </Pressable>
            <Pressable style={style.formButton} onPress={handleAdmin}>
                <Text style={style.textButton}>Admin</Text>
            </Pressable>
            <StatusBar style="auto" />
            <Pressable style={style.formButton} onPress={handleSobre}>
                <Text style={style.textButton}>Sobre</Text>
            </Pressable>
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
});
