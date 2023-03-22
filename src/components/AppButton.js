import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomColors from '../config/CustomColors';

function AppButton({ btnText = 'SignIn', btnColor = CustomColors.primary }) {
    return (
        <TouchableOpacity style={[styles.login, { backgroundColor: btnColor }]}>

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
    },
    textBtn: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default AppButton;