import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const NovoEvento = () => {
  const [nomeEvento, setNomeEvento] = useState('');
  const [dataEvento, setDataEvento] = useState('');
  const [localEvento, setLocalEvento] = useState('');
  const [linkImagem, setLinkImagem] = useState('');

  const handleCadastro = () => {
    console.log('Nome do Evento:', nomeEvento);
    console.log('Data do Evento:', dataEvento);
    console.log('Local do Evento:', localEvento);
    console.log('Local Link Imagem', linkImagem);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Cadastro de Evento</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Evento"
        value={nomeEvento}
        onChangeText={setNomeEvento}
      />
      <TextInput
        style={styles.input}
        placeholder="Data do Evento"
        value={dataEvento}
        onChangeText={setDataEvento}
      />
      <TextInput
        style={styles.input}
        placeholder="Local do Evento"
        value={localEvento}
        onChangeText={setLocalEvento}
      />
      <TextInput
        style={styles.input}
        placeholder="Link Imagem"
        value={linkImagem}
        onChangeText={setLinkImagem}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default NovoEvento;