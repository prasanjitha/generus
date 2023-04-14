import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CustomColors from '../config/CustomColors';

function LandingPage(props) {
    return (
        <ImageBackground blurRadius={5.0} style={styles.background} source={{ uri: 'https://cdn.pixabay.com/photo/2021/12/12/20/17/drink-6865996_960_720.jpg' }}>
            <Text style={styles.title}>Happy New Year!</Text>
            <View style={{ width: '100%', height: 50.0, borderRadius: 20.0, backgroundColor: 'red', alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: CustomColors.white, fontWeight: 'bold', fontSize: 18.0 }}>SignIn</Text>
            </View>
            <View style={{ width: '100%', height: 50.0, marginTop: 20.0, borderRadius: 20.0, backgroundColor: 'green', alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: CustomColors.white, fontWeight: 'bold', fontSize: 18.0 }}>SignUp</Text>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 20.0,
    },
    title: {
        marginTop: 60,
        fontWeight: 'bold',
        fontSize: 40.0,
        color: CustomColors.white,
        position: 'absolute',
        top: 10.0,
    }
});

export default LandingPage;