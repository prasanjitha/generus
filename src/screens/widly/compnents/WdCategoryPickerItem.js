import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WdIcon from './WdIcon';
import WdColor from '../config/WdColor';

function WdCategoryPickerItem({ item, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <WdIcon backgroundColor={item.backgroundColor} name={item.icon} size={80.0} />
            <Text style={styles.lable}>{item.lable}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20.0,
        paddingVertical: 15.0,
        alignItems: 'center',
        width: '33%',
    },

    lable: {
        marginTop: 10.0,
        fontSize: 16.0,
        fontWeight: '800',
        textAlign: 'center',
        color: WdColor.lightGray,
    }
});

export default WdCategoryPickerItem;