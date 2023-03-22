import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppLineTextInput from '../components/AppLineTextInput';
import IconButton from '../components/IconButton';
import Space from '../components/Space';
import CustomColors from '../config/CustomColors';

function SignUpScreen(props) {
    return (
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
            <Text style={styles.mainTitle}>Welcome back</Text>
            <Text style={styles.subTitle}>Please create a account</Text>
            <Space height={60.0} />
            <AppLineTextInput hintText='Username' />
            <Space height={20.0} />
            <AppLineTextInput hintText='Email' />
            <Space height={20.0} />
            <AppLineTextInput hintText='Password' />
            <Space height={20.0} />
            <AppLineTextInput hintText='Re Password' />
            <Space height={20.0} />
            <AppButton btnText='Sign Up' />
            <Space height={20.0} />
            <Text style={styles.forgotPass}>Or via social media</Text>
            <Space height={20.0} />
            <View style={styles.socialIcons}>
                <IconButton bgColor={CustomColors.lightBlue} name='f' />
                <Space width={10.0} />
                <IconButton name='G' />
                <Space width={10.0} />
                <IconButton bgColor={CustomColors.darkBlue} name='in' />
            </View>
            <Space height={10.0} />
            <Text style={styles.haveAcc}>Don't have an account? SignIn</Text>
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

export default SignUpScreen;