import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function WidlyButton({ btnText, color = '#fc5c65', onPress }) {
    return (
        <TouchableOpacity style={[styles.btn, { backgroundColor: color }]} onPress={onPress}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 50.0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20.0,

    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18.0,
    },
});

export default WidlyButton;