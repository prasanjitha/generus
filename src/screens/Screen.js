import React, { Children } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import CustomColors from '../config/CustomColors';

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: CustomColors.white,
    }
});

export default Screen;