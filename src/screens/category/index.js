/* eslint-disable prettier/prettier */
import React , { useEffect } from 'react';

import { View, FlatList } from 'react-native';

import { styles } from './styles';

import { useSelector, connect, useDispatch } from 'react-redux';

import { filteredProducts, selectProduct } from '../../store/actions/product.action';

import ProductsGrid from '../../components/products-grid/index';
const Category = ( { navigation, route } ) => {

    const dispatch = useDispatch();

    const categoryProducts = useSelector(state => state.products.filteredProducts);

    const selectedCategory = useSelector(state => state.categories .selectedCategory);

    console.log(selectedCategory);
    console.log(categoryProducts);

    const handleSelectCategory = (product) => {
        dispatch(selectProduct(product.id))
        navigation.navigate('Product', { name: product.name });
    };

    const renderItem = ({ item }) => <ProductsGrid item={item} onSelected={handleSelectCategory}/>;

    useEffect(() => {
        dispatch(filteredProducts(selectedCategory.id))
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
            data={categoryProducts}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns= {1}
            />
        </View>

    );
};

export default connect()(Category);
