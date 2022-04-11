/* eslint-disable prettier/prettier */
import React from 'react';

import { Text, View, Button } from 'react-native';

import { useSelector, connect} from 'react-redux';

import { styles } from './styles';

const Product = ({ navigation, route }) => {
    
    const product = useSelector(state => state.products.selectedProduct);

    const { name, description, price } = product;

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
            <Text style={styles.price}>
                ${price}
            </Text>
            <Button title="Agregar al carrito" onPress={() => null} />
        </View>
    );
};

export default connect()(Product);
