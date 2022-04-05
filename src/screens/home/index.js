/* eslint-disable prettier/prettier */
import React from 'react';

import { View, FlatList } from 'react-native';

import { styles } from './styles';

import { CATEGORIES } from '../../constants/categories';

import CategoryGrid from '../../components/category-grid/index';

const Home = ({ navigation }) => {

    const handleSelectCategory = (category) => {
        navigation.navigate('Category', { id: category.id, name: category.name });
    };

    const renderItem = ({ item }) => <CategoryGrid item={item} onSelected={handleSelectCategory}/>;

    return (
        <View style={styles.container}>
            <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns= {1}
            />
        </View>

    );
};

export default Home;
