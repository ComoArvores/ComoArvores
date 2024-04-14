import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Menu = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <View>
            {isVisible && (
                <View style={{ backgroundColor: "blue" }}>
                    <TouchableOpacity
                        key={"0"}>
                        <Text >Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        key={"1"}>
                        <Text >Sobre Nós</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        key={"2"}>
                        <Text >Novo Evento</Text>
                    </TouchableOpacity>
                </View>
            )}
            <TouchableOpacity onPress={toggleVisibility} >
                <Ionicons style={styles.menuIcon} name="menu" size={24} color="white" />
            </TouchableOpacity>


        </View>
    );
};
const styles = StyleSheet.create({
    menuIcon: {
        alignItems: 'flex-end',
    }
});

export default Menu;