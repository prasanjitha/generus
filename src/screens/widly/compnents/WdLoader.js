import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import WdColor from '../config/WdColor';

function WdLoader({ width = 200, height = 200 }) {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.mainContainer]}>
            <LottieView style={{
                width: width,
                height: height,
            }} source={require('../wdassets/70715-shadow-spinner.json')} autoPlay />
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 1,
    },
});

export default WdLoader;