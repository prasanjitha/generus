import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CustomColors from '../config/CustomColors';
import AppBorderButton from '../components/AppBorderButton';
import AppButton from '../components/AppButton';
import Space from '../components/Space';

function MainScreen(props) {
    return (
        <View style={styles.main}>
            <Image source={require('../assets/mainImg.png')} />
            <Space />
            <Text style={styles.mainTitle}>Hello!</Text>
            <Text style={styles.subTitle}>Welcome to Generus, the place we can be more generous.</Text>
            <Space height={30.0} />
            <AppButton btnText='sINGiN' />
            <Space />
            <AppBorderButton btnText='SignUp' />
        </View>
    );
}
const styles = StyleSheet.create({
    mainTitle: {
        fontWeight: 'bold',
        fontSize: 46.0,
        color: CustomColors.secondary,
    },
    main: {
        flex: 1,
        alignItems: 'center',
        margin: 20.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 16.0,
        color: CustomColors.gray,
        textAlign: 'center',
    },
});

export default MainScreen;