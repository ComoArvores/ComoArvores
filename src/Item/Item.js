import React from 'react';
import { View, Text } from 'react-native';

const Item = ({ route }) => {
    const meuArray = route.params;
    return (
        <View>
            <Text>{meuArray}</Text>
        </View>
    );
};
export default Item;