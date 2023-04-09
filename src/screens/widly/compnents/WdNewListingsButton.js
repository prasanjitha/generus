import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import WdColor from '../config/WdColor';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function WdNewListingsButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name='plus-circle' color={WdColor.white} size={40.0} />
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: WdColor.primary,
        borderRadius: 40.0,
        height: 80.0,
        width: 80.0,
        bottom: 40.0,
        borderColor: WdColor.white,
        borderWidth: 10.0,
        justifyContent: 'center',
    }
});

export default WdNewListingsButton;