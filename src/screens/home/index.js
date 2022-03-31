/* eslint-disable prettier/prettier */
import React from 'react';

import { Text, View, Button, FLatList } from 'react-native';

import { styles } from './styles'

import { CATEGORIES } from '../../constants/categories'

import CategoryGrid from '../../components/category-grid/index'
import { NavigationHelpersContext } from '@react-navigation/native';

const Home = ({ navigation }) => {

    const handleSelectCategory = (category) => {
        NavigationHelpersContext.navigate('Category', { id: category.id, title: category.name })
    }

    const renderItem = ({ item }) => <CategoryGrid item={item} onSelected={handleSelectCategory}/>

    return (
        <View>
            <FLatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns= {2}
            />
        </View>

    )
};

export default Home;