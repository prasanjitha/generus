import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomColors from '../config/CustomColors';

function AppBorderButton({ btnText = 'SignIn' }) {
    return (
        <TouchableOpacity style={[styles.login, { backgroundColor: CustomColors.white }]}>

            <Text style={styles.textBtn}>{btnText}</Text>

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    login: {
        width: '100%',
        height: 50.0,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: CustomColors.primary,
        borderWidth: 2,
    },
    textBtn: {
        color: CustomColors.primary,
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default AppBorderButton;