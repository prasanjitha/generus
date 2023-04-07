import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import WdTextInput from '../compnents/WdTextInput';
import WidlyButton from '../compnents/WidlyButton';
import WdSpace from '../compnents/WdSpace';
import WdColor from '../config/WdColor';
import { useNavigation } from '@react-navigation/native';
import WdLoader from '../compnents/WdLoader';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/actions/auth-action';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
});
function WdLoginScreen(props) {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { isLoading } = useSelector(state => state.authReducers);
    return (
        <>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.mainTitle}>Welcome back</Text>
                <Text style={styles.subTitle}>Login to continue</Text>
                <Image style={styles.image} source={require('../wdassets/Group_310.png')} />
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => dispatch(loginUser(values, navigation))}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, isValid, touched, setFieldTouched, values }) => (
                        <>
                            <WdTextInput
                                onBlur={() => setFieldTouched('email')}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                icon='email'
                                placeholder='Email' />
                            {touched.email && <Text style={styles.error}>{errors.email}</Text>}
                            <WdTextInput
                                onBlur={() => setFieldTouched('password')}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                icon='lock'
                                placeholder='Password' />
                            {touched.password && <Text style={styles.error}>{errors.password}</Text>}
                            <WdSpace height={20.0} />
                            <WidlyButton onPress={handleSubmit} btnText='LOGIN' />
                        </>)}
                </Formik>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.registerText}>
                    <Text>Don't have an account? Register</Text>
                </TouchableOpacity>
            </ScrollView>
            {isLoading && <WdLoader />}
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20.0,
        backgroundColor: WdColor.white,
    },
    error: {
        alignSelf: 'flex-start',
        color: WdColor.red,
    },
    image: {
        alignSelf: 'center',
        marginVertical: 40.0,
    },
    mainTitle: {
        fontWeight: 'bold',
        fontSize: 46.0,
        color: WdColor.secondary,
    },
    registerText: {
        alignSelf: 'center',
        marginVertical: 10.0,
        fontSize: 16.0,
        fontWeight: '800'
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 18.0,
        color: WdColor.gray,
    },
});

export default WdLoginScreen;