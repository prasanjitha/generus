import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import AppButton from '../components/AppButton';
import AppLineTextInput from '../components/AppLineTextInput';
import Space from '../components/Space';
import CustomColors from '../config/CustomColors';

function AdditionalInfoScreen(props) {
    return (
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
            <Text style={styles.mainTitle}>Profile</Text>
            <Text style={styles.subTitle}>Please complete your profile</Text>
            <Space height={20.0} />
            <Image style={styles.image} source={require('../assets/CompositeLayer-mdpi.png')} />
            <Space height={20.0} />
            <AppLineTextInput hintText='Mobile Number' />
            <Space height={20.0} />
            <AppLineTextInput hintText='Province' />
            <Space height={20.0} />
            <AppLineTextInput hintText='Distric' />
            <Space height={20.0} />
            <AppLineTextInput hintText='Home Town' />
            <Space height={20.0} />
            <AppButton btnText='Done' />
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
    image: {
        alignSelf: 'center',
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
export default AdditionalInfoScreen;