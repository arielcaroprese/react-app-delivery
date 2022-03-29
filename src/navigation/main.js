import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from '../screens/home/index';
import Category from '../screens/category/index';
import Product from '../screens/product/index';

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Category" component={Category}/>
            <Stack.Screen name="Product" component={Product}/>
        </Stack.Navigator>
    )

};

export default MainNavigator;

