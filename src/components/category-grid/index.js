import React from 'react';

import { View, Text, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import { styles } from './styles';

const CategoryGrid = ({ title, onselect }) => {

    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.container}>
            <TouchableComponent 
                    style={{ ...style.touchable, ...{backgroundColor: item.color}}}
                    onPress={()=> onSelected(item)}
                >
                <View>
                    <Text style={styles.title}>
                        {items.title}
                    </Text>
                </View>
            </TouchableComponent>
        </View>
    )
}

export default CategoryGrid;