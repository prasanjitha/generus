import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

function AppLoader(props) {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.mainContainer]}>
            <LottieView source={require('../assets/9582-liquid-4-dot-loader.json')} autoPlay />
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 1,
    }
});

export default AppLoader;