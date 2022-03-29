/* eslint-disable prettier/prettier */
import React from 'react';

import { Text, View, Button } from 'react-native';

import { styles } from './styles'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Home Screen
            </Text>
            <Button title="Ir a categoría" onPress={() => {navigation.navigate('Category')}}/>
        </View>
    )
};

export default Home;