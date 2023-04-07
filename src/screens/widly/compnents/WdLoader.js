import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import WdColor from '../config/WdColor';

function WdLoader(props) {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.mainContainer]}>
            <LottieView style={styles.lottie} source={require('../wdassets/9826-simple-loader.json')} autoPlay />
        </View>
    );
}
const styles = StyleSheet.create({
    lottie: {
        width: 200,
        height: 200,
    },
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 1,
    },
});

export default WdLoader;