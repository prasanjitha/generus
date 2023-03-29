import React from 'react';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppButton from '../components/AppButton';
import AppLineTextInput from '../components/AppLineTextInput';
import Space from '../components/Space';
import CustomColors from '../config/CustomColors';
import { pickImage, } from '../redux/actions/user-action';
import { uploadUserAdditionalInfo } from '../redux/actions/auth-action';
import { useNavigation } from '@react-navigation/native';
import AppLoader from '../components/AppLoader';

const validationSchema = Yup.object().shape({
    mobile: Yup.string().required().label("Mobile Number"),
    province: Yup.string().required().label("Province"),
    distric: Yup.string().required().label("Distric"),
    town: Yup.string().required().label("Home Town"),
});
function AdditionalInfoScreen(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { imageUrl, isLoading, isImgUploading } = useSelector(state => state.userReducers);
    const { userRegData } = useSelector(state => state.authReducers);
    return (
        <>
            <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
                <Text style={styles.mainTitle}>Profile</Text>
                <Text style={styles.subTitle}>Please complete your profile</Text>
                <Space height={20.0} />
                {imageUrl === 'imageUri' && isImgUploading === false ? <TouchableOpacity onPress={() => dispatch(pickImage())}>
                    <Image style={styles.image} source={require('../assets/CompositeLayer-mdpi.png')} />
                </TouchableOpacity> : isImgUploading === true ? <View style={{ width: 150, height: 150, borderRadius: 75.0, alignSelf: 'center' }}><AppLoader /></View> : <Image style={{ width: 150, height: 150, borderRadius: 75.0, alignSelf: 'center' }} source={{ uri: imageUrl }} />}
                <Space height={20.0} />
                <Formik
                    initialValues={{ mobile: '', province: '', distric: '', town: '' }}
                    onSubmit={values => {
                        values.imageUrl = imageUrl;
                        values.email = userRegData.email;
                        dispatch(uploadUserAdditionalInfo(values, navigation));
                    }}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, isValid, touched, setFieldTouched, values }) => (
                        <>

                            <AppLineTextInput
                                hintText='Mobile Number'
                                onBlur={() => setFieldTouched('mobile')}
                                value={values.mobile}
                                onChangeText={handleChange('mobile')}
                            />
                            {touched.mobile && <Text style={styles.error}>{errors.mobile}</Text>}
                            <Space height={20.0} />
                            <AppLineTextInput
                                hintText='Province'
                                onBlur={() => setFieldTouched('province')}
                                value={values.province}
                                onChangeText={handleChange('province')}
                            />
                            {touched.province && <Text style={styles.error}>{errors.province}</Text>}
                            <Space height={20.0} />
                            <AppLineTextInput
                                hintText='Distric'
                                onBlur={() => setFieldTouched('distric')}
                                value={values.distric}
                                onChangeText={handleChange('distric')}
                            />
                            {touched.distric && <Text style={styles.error}>{errors.distric}</Text>}

                            <Space height={20.0} />
                            <AppLineTextInput
                                hintText='Home Town'
                                onBlur={() => setFieldTouched('town')}
                                value={values.town}
                                onChangeText={handleChange('town')}
                            />
                            {touched.town && <Text style={styles.error}>{errors.town}</Text>}

                            <Space height={20.0} />
                            <AppButton
                                btnText='Done'
                                onPress={handleSubmit}
                            />
                        </>
                    )}
                </Formik>
            </ScrollView>
            {isLoading && <AppLoader />}
        </>
    );
}
const styles = StyleSheet.create({
    error: {
        color: CustomColors.red,
        top: 5.0,
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