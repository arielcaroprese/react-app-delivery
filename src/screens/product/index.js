/* eslint-disable prettier/prettier */
import React from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles'

const Product = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Product Screen
            </Text>
        </View>
    )
};

export default Product;