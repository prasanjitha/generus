import React from 'react';
import { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Space from '../components/Space';
import AppLoader from '../components/AppLoader';
import AppButton from '../components/AppButton';
import CustomColors from '../config/CustomColors';
import AppLineTextInput from '../components/AppLineTextInput';
import { pickImage, uploadCharity } from '../redux/actions/user-action';

function AddCarityScreen(props) {
    const [spNote, setSpNote] = useState();
    const [itemName, setItemName] = useState();
    const dispatch = useDispatch();
    const { imageUrl, isLoading, isImgUploading } = useSelector(state => state.userReducers);
    return (
        <>
            <ScrollView>
                <View style={styles.screen}>
                    <Space height={20.0} />
                    {isImgUploading === true ? <View style={styles.appLoader}>
                        <AppLoader />
                    </View> : <View>
                        {imageUrl !== 'imageUri' ? <Image
                            style={styles.appLoader}
                            source={{ uri: imageUrl }}
                        /> : <TouchableOpacity onPress={() => dispatch(pickImage())}>
                            <Image source={require('../assets/large_add_image.png')} />
                        </TouchableOpacity>}
                    </View>}
                    <Space height={20.0} />
                    <AppLineTextInput
                        onChangeText={(value) => setItemName(value)}
                        hintText='Charity Name'
                    />
                    <Space height={20.0} />
                    <TextInput
                        placeholder='Add special note here'
                        onChangeText={(value) => setSpNote(value)}
                        style={styles.comment}
                    />
                    <Space height={20.0} />
                    <AppButton
                        btnText='Add'
                        onPress={() => {
                            const data = {
                                charityUrl: imageUrl,
                                itemName: itemName,
                                specialNote: spNote,
                            }
                            dispatch(uploadCharity(data));
                        }}
                    />
                </View>
            </ScrollView>
            {isLoading && <AppLoader />}
        </>
    );
}
const styles = StyleSheet.create({
    appLoader: {
        width: 300.0,
        height: 300.0,
        borderRadius: 15.0,
    },
    comment: {
        borderRadius: 15.0,
        borderWidth: 2.0,
        borderColor: CustomColors.primary,
        width: '100%',
        height: 100.0,
        paddingLeft: 10.0,
        fontSize: 18.0,
        fontWeight: '600'
    },
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 20.0,
    }
});

export default AddCarityScreen;