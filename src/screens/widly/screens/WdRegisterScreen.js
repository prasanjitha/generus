import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import WdTextInput from '../compnents/WdTextInput';
import WidlyButton from '../compnents/WidlyButton';
import WdSpace from '../compnents/WdSpace';
import WdColor from '../config/WdColor';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '../../../redux/actions/auth-action';
import WdLoader from '../compnents/WdLoader';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
});
function WdRegisterScreen(props) {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { isLoading } = useSelector(state => state.authReducers);

    return (
        <>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.mainTitle}>Welcome back</Text>
                <Text style={styles.subTitle}>Please create a account</Text>
                <Image style={styles.image} source={require('../wdassets/Group_311.png')} />
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    onSubmit={values => dispatch(registerUser(values, navigation))}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, isValid, touched, setFieldTouched, values }) => (
                        <>
                            <WdTextInput
                                onBlur={() => setFieldTouched('name')}
                                value={values.name}
                                onChangeText={handleChange('name')}
                                icon='account'
                                placeholder='Name'
                            />
                            {touched.name && <Text style={styles.error}>{errors.name}</Text>}
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
                            <WidlyButton onPress={handleSubmit} btnText='REGISTER' />
                        </>)}
                </Formik>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginText}>
                    <Text>Already have an account. Login</Text>
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
        width: 150,
        height: 150,
        marginVertical: 20.0,
    },
    loginText: {
        alignSelf: 'center',
        marginVertical: 10.0,
        fontSize: 16.0,
        fontWeight: '800'
    },
    mainTitle: {
        fontWeight: 'bold',
        fontSize: 46.0,
        color: WdColor.secondary,
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 18.0,
        color: WdColor.gray,
    },
});

export default WdRegisterScreen;