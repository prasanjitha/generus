import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppLineTextInput from '../components/AppLineTextInput';
import IconButton from '../components/IconButton';
import Space from '../components/Space';
import CustomColors from '../config/CustomColors';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/actions/auth-action';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../Navigation/Navigation';
import AppLoader from '../components/AppLoader';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
    username: Yup.string().required().label("Username"),
    rePass: Yup.string().required().label("Re Enterd Password"),
});

function SignUpScreen(props) {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const { isLoading } = useSelector(state => state.authReducers);

    return (
        <>
            <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
                <Text style={styles.mainTitle}>Welcome back</Text>
                <Text style={styles.subTitle}>Please create a account</Text>
                <Space height={60.0} />
                <Formik
                    initialValues={{ username: '', email: '', password: '', rePass: '' }}
                    onSubmit={values =>
                        dispatch(registerUser(values, navigation))
                    }
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, isValid, touched, setFieldTouched, values }) => (
                        <>
                            <AppLineTextInput
                                onBlur={() => setFieldTouched('username')}
                                value={values.username}
                                onChangeText={handleChange('username')}
                                hintText='Username' />
                            {touched.username && <Text style={styles.error}>{errors.username}</Text>}
                            <Space height={20.0} />
                            <AppLineTextInput
                                onBlur={() => setFieldTouched('email')}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                hintText='Email' />
                            {touched.email && <Text style={styles.error}>{errors.email}</Text>}
                            <Space height={20.0} />
                            <AppLineTextInput
                                onBlur={() => setFieldTouched('password')}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                hintText='Password' />
                            {touched.password && <Text style={styles.error}>{errors.password}</Text>}
                            <Space height={20.0} />
                            <AppLineTextInput
                                onBlur={() => setFieldTouched('rePass')}
                                value={values.rePass}
                                onChangeText={handleChange('rePass')}
                                hintText='Re Password' />
                            {touched.rePass && <Text style={styles.error}>{errors.rePass}</Text>}
                            <Space height={20.0} />
                            <AppButton
                                onPress={handleSubmit}
                                btnText='Sign Up' />
                        </>
                    )}
                </Formik>
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
                <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                    <Text style={styles.haveAcc}>Don't have an account? SignIn</Text>
                </TouchableOpacity>
            </ScrollView>
            {isLoading && <AppLoader />}
        </>
    );
}
const styles = StyleSheet.create({
    error: {
        color: CustomColors.red,
        paddingTop: 10.0,
    },
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