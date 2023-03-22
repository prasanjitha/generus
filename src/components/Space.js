import React from 'react';
import { StyleSheet, View } from 'react-native';

function Space({ height = 20.0, width }) {
    return (
        <View style={{ paddingTop: height, paddingLeft: width }} ></View>
    );
}
export default Space;