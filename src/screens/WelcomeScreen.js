import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
} from 'react-native';

import AppButton from '../components/AppButton';
import CustomColors from '../config/CustomColors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={4}
            resizeMode='cover'
            style={styles.image}
            source={{ uri: 'https://www.digitaltrends.com/wp-content/uploads/2022/02/co2crj.jpg?p=1#038;p=1.jpg' }}
        >
            <View style={styles.btnContainer}>
                <AppButton />
                <View style={styles.space} />
                <AppButton btnText='SignUp' btnColor={CustomColors.secondary} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        padding: 20,
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    space:
    {
        paddingTop: 10.0,
    }

});
export default WelcomeScreen;