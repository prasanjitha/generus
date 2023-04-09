import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import WdCard from './WdCard';
import WdColor from '../config/WdColor';
import { useNetInfo } from '@react-native-community/netinfo';

function WdOfflineNotice(props) {
    const netInfo = useNetInfo();
    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No Internet Connection</Text>
            </View>
        );
    return null;
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: WdColor.primary,
        height: 50.0,
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    text: {
        color: WdColor.white,
    }
});

export default WdOfflineNotice;