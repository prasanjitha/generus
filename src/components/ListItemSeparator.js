import React from 'react';
import { StyleSheet, View } from 'react-native';

import CustomColors from '../config/CustomColors';

function ListItemSeparator(props) {
    return (
        <View
            style={styles.view}
        />
    );
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 1,
        backgroundColor: CustomColors.gray,


    }
});

export default ListItemSeparator;