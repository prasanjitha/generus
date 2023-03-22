import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CustomColors from '../config/CustomColors';

function AppLineTextInput({ hintText }) {
    return (
        <View style={styles.textInput}>
            <Text style={styles.inputPlaceholder}>{hintText}</Text>
            <TextInput />
        </View>
    );
}
const styles = StyleSheet.create({
    inputPlaceholder: {
        fontSize: 18.0,
        fontWeight: '500',
        color: CustomColors.gray,
    },
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: CustomColors.primary,
    }
});
export default AppLineTextInput;