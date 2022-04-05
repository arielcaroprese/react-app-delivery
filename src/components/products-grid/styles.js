import { StyleSheet, Dimensions } from 'react-native';

const { width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        margin: 10,
    },
    touchable: {
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: height / 4,
    },
    details: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
    },
    description: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
    },
    price: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 24,
    },
})