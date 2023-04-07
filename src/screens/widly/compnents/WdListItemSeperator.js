import React from 'react';
import { StyleSheet, View } from 'react-native';

import WdColor from '../config/WdColor';

function WdListItemSeperator() {
    return (
        <View style={styles.container} />
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 1,
        backgroundColor: WdColor.light,
    }
});

export default WdListItemSeperator;