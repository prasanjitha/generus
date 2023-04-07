import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function WdPickerItem({ lable, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{lable}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text: {
        padding: 20.0,
    }
});
export default WdPickerItem;