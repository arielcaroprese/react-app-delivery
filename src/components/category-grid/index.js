/* eslint-disable prettier/prettier */
import React from 'react';

import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';

const CategoryGrid = ({ onSelected, item }) => {

    return (
        <View style={[styles.container, {backgroundColor: item.color}]}>
            <TouchableOpacity
                    style={[styles.touchable, {backgroundColor: item.color}]}
                    onPress={()=> onSelected(item)}
                >
                <View>
                    <Text style={styles.title}>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CategoryGrid;
