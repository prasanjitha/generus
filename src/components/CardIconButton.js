import React from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';

import CustomColors from '../config/CustomColors';

function CardIconButton({ iconName, iconColor = CustomColors.red }) {
    return (
        <View style={[styles.iconCircle, { backgroundColor: iconColor, }]}>
            <Image style={styles.icon} source={iconName} />
        </View>
    );
}
const styles = StyleSheet.create({
    icon: {
        width: 15,
        height: 15,
    },
    iconCircle: {
        width: 30.0,
        height: 30.0,
        borderRadius: 25.0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CardIconButton;