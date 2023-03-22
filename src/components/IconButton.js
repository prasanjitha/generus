import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomColors from '../config/CustomColors';

function IconButton({ name, bgColor = CustomColors.red }) {
    return (
        <View style={[styles.socialIcon, { backgroundColor: bgColor }]}>
            <Text style={styles.iconText}>{name}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    iconText: {
        fontWeight: 'bold',
        fontSize: 30.0,
        color: CustomColors.white,
    },
    socialIcon: {
        width: 50.0,
        height: 50.0,
        borderRadius: 25.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default IconButton;