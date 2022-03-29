/* eslint-disable prettier/prettier */
import React from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Home Screen
            </Text>
        </View>
    )
};

export default Home;