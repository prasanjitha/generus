import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import WidlyButton from '../compnents/WidlyButton';
import WdSpace from '../compnents/WdSpace';

function WidlyWelcome(props) {
    return (
        <ImageBackground
            blurRadius={2.0}
            style={styles.background}
            source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/16/19/18/balloon-991680_960_720.jpg' }}
        >
            <WidlyButton btnText='SignIn' />
            <WdSpace height={20.0} />
            <WidlyButton btnText='SignUp' color='#4ecdc4' />
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20.0,
    }
});
export default WidlyWelcome;