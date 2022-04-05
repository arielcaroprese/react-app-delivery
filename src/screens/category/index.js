/* eslint-disable prettier/prettier */
import React from 'react';

import { View, FlatList } from 'react-native';

import { styles } from './styles';

import { CATEGORIES } from '../../constants/categories';
import { PRODUCTS } from '../../constants/products';

import ProductsGrid from '../../components/products-grid/index';

const Category = ( { navigation, route } ) => {

    const { id } = route.params;

    const selectedCategory = PRODUCTS.filter(product => product.category === id);

    const handleSelectCategory = (product) => {
        navigation.navigate('Product', { product, name: product.name });
    };

    const renderItem = ({ item }) => <ProductsGrid item={item} onSelected={handleSelectCategory}/>;

    return (
        <View style={styles.container}>
            <FlatList
            data={selectedCategory}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns= {1}
            />
        </View>

    );
};

export default Category;
