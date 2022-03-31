/* eslint-disable prettier/prettier */
import React from 'react';

import { Platform } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from '../screens/home/index';
import Category from '../screens/category/index';
import Product from '../screens/product/index';

import { colors } from '../constants/themes';

const MainNavigator = () => {
    return (
        <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
                    headerTitleStyle : {
                        fontFamily: 'Montserrat-SemiBold',
                        fontSize: 18,
                    }
                }}
                >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="Category"
                    component={Category}
                    options={({route}) => ({ title: route.params.title })}
                />
                <Stack.Screen name="Product" component={Product}/>
        </Stack.Navigator>
    )

};

export default MainNavigator;

