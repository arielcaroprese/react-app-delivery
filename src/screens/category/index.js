/* eslint-disable prettier/prettier */
import React from 'react';

import { Text, View, Button } from 'react-native';

import { styles } from './styles'

const Category = ( {navigation} ) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Category Screen
            </Text>
            <Button title="Ir a categoría" onPress={() => {navigation.navigate('Product')}}/>
        </View>
    )
};

export default Category;