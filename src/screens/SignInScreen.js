import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Space from '../components/Space';
import AppButton from '../components/AppButton';
import { loginUser } from '../redux/actions/auth-action';
import IconButton from '../components/IconButton';
import CustomColors from '../config/CustomColors';
import AppLineTextInput from '../components/AppLineTextInput';
import { useNavigation } from '@react-navigation/native';
import AppLoader from '../components/AppLoader';

const validationSchema = Yup.object().shape({
    username: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
});

function SignInScreen(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.authReducers);

    return (
        <>
            <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
                <Text style={styles.mainTitle}>Welcome back</Text>
                <Text style={styles.subTitle}>Login to continue</Text>
                <Space height={100.0} />
                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={values => dispatch(loginUser(values, navigation))}
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
                            <Space height={40.0} />
                            <AppLineTextInput
                                onBlur={() => setFieldTouched('password')}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                hintText='Password' />
                            {touched.password && <Text style={styles.error}>{errors.password}</Text>}
                            <Space height={40.0} />
                            <AppButton
                                onPress={handleSubmit}
                                btnText='Login Now' />
                        </>
                    )}
                </Formik>
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

export default SignInScreen;