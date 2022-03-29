/* eslint-disable prettier/prettier */
import React from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles'

const Category = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Category Screen
            </Text>
        </View>
    )
};

export default Category;