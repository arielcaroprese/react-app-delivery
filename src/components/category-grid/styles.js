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
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
    },
})