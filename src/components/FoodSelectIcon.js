import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import CustomColors from '../config/CustomColors';

function FoodSelectIcon({ imagePath }) {
    return (
        <View style={styles.main}>
            <Image source={imagePath} />
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        width: 30,
        height: 30.0,
        borderRadius: 15.0,
        backgroundColor: CustomColors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FoodSelectIcon;