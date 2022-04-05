/* eslint-disable prettier/prettier */
import React from 'react';

import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';

const ProductsGrid = ({ onSelected, item }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                    style={[styles.touchable, {backgroundColor: item.color}]}
                    onPress={()=> onSelected(item)}
                >
                <View style={styles.details}>
                    <Text style={styles.name}>
                        {item.name}
                    </Text>
                    <Text style={styles.description}>
                        {item.description}
                    </Text>
                    <Text style={styles.price}>
                        $ {item.price}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ProductsGrid;
