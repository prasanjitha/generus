import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import WdColor from '../config/WdColor';

function WdTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20.0} color={WdColor.lightGray} style={styles.icon} />}
            <TextInput {...otherProps} style={styles.textInput} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: WdColor.light,
        borderRadius: 25.0,
        flexDirection: 'row',
        width: '100%',
        padding: 15.0,
        marginVertical: 10.0,
        height: 50.0
    },
    icon: {
        marginRight: 10.0,
    },
    textInput: {
        fontSize: 16.0,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color: WdColor.dark,
    }
});

export default WdTextInput;