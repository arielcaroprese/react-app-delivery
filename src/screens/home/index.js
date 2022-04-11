/* eslint-disable prettier/prettier */
import React from 'react';

import { View, FlatList } from 'react-native';

import { styles } from './styles';

import { useSelector, useDispatch, connect } from 'react-redux';

import { selectedCategory } from '../../store/actions/category.action';

import CategoryGrid from '../../components/category-grid/index';

const Home = ({ navigation }) => {

    const dispatch = useDispatch();

    const categories = useSelector(state => state.categories.categories);

    const handleSelectCategory = (category) => {
        dispatch(selectedCategory(category.id));
        navigation.navigate('Category', { name: category.name });
    };

    const renderItem = ({ item }) => <CategoryGrid item={item} onSelected={handleSelectCategory}/>;

    return (
        <View style={styles.container}>
            <FlatList
            data={categories}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns= {1}
            />
        </View>

    );
};

export default connect()(Home);
