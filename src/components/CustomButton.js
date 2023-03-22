import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function CustomButton({ btnText, onPress }) {
    return (
        <SafeAreaView style={styles.screen}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.text}>{btnText}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 46.0,
        borderRadius: 15,
        backgroundColor: '#f13129',
        justifyContent: 'center',
        alignItems: 'center',
    },
    screen: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18.0,
        color: '#fff'
    },
});
export default CustomButton;