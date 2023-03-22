import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import AppBorderButton from '../components/AppBorderButton';
import AppButton from '../components/AppButton';
import AppLineTextInput from '../components/AppLineTextInput';
import IconButton from '../components/IconButton';
import Space from '../components/Space';
import CustomColors from '../config/CustomColors';

function SignInScreen(props) {
    return (
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
            <Text style={styles.mainTitle}>Welcome back</Text>
            <Text style={styles.subTitle}>Login to continue</Text>
            <Space height={100.0} />
            <AppLineTextInput hintText='Username' />
            <Space height={40.0} />
            <AppLineTextInput hintText='Password' />
            <Space height={40.0} />
            <AppButton btnText='Login Now' />
            <Space height={20.0} />
            <Text style={styles.forgotPass}>Forgot password?</Text>
            <Space height={20.0} />
            <View style={styles.socialIcons}>
                <IconButton bgColor={CustomColors.lightBlue} name='f' />
                <Space width={10.0} />
                <IconButton name='G' />
                <Space width={10.0} />
                <IconButton bgColor={CustomColors.darkBlue} name='in' />
            </View>
            <Space height={10.0} />
            <Text style={styles.haveAcc}>Don't have an account? SignUp</Text>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    forgotPass: {
        fontWeight: 'bold',
        fontSize: 18.0,
        textAlign: 'center',
    },
    haveAcc: {
        fontSize: 16.0,
        fontWeight: '800',
        color: CustomColors.gray,
        textAlign: 'center',
    },
    mainTitle: {
        fontWeight: 'bold',
        fontSize: 46.0,
        color: CustomColors.secondary,
    },
    screen: {
        flex: 1,
        margin: 20,
    },
    socialIcons: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 18.0,
        color: CustomColors.gray,
    },
});

export default SignInScreen;