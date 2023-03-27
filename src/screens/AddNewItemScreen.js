import React from 'react';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import AppLineTextInput from '../components/AppLineTextInput';
import FoodSelectIcon from '../components/FoodSelectIcon';
import FoodSelectText from '../components/FoodSelectText';
import CheckBox from 'expo-checkbox';


import Space from '../components/Space';
import CustomColors from '../config/CustomColors';
import AppButton from '../components/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { pickImage, uploadItem } from '../redux/actions/user-action';
import AppLoader from '../components/AppLoader';

const initialState = {
    react: false,
};

function AddNewItemScreen(props) {
    const [chosenOption, setChosenOption] = useState('apple');
    const [itemName, setItemName] = useState('');
    const [specialNote, setSpecialNote] = useState('');
    const [dateAndTime, setDateAndTime] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const options = [
        { value: 'food' },
        { value: 'non-food' },
    ];
    const dispatch = useDispatch();
    const { imageUrl, isLoading, isImgUploading } = useSelector(state => state.userReducers);
    return (
        <>
            <ScrollView>
                <View style={styles.main}>
                    <Space height={20.0} />
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => dispatch(pickImage())}>
                            <Image source={require('../assets/image_add.png')} />
                        </TouchableOpacity>
                        <Space width={20.0} />
                        {isImgUploading && <View style={{ width: 120, height: 120, borderRadius: 15.0, }}>
                            <AppLoader />
                        </View>}
                        {imageUrl !== null && <Image style={{ width: 120, height: 120, borderRadius: 15.0, }} source={{ uri: imageUrl }} />}
                    </View>
                    <Space height={20.0} />
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <FoodSelectIcon imagePath={require('../assets/book_icon.png')} />
                            <Space height={5.0} />
                            <FoodSelectIcon imagePath={require('../assets/spoon_icon.png')} />
                        </View>
                        <Space width={10.0} />
                        <View>
                            <FoodSelectText
                                title='Foods'
                                subTitle='Give away any food item that you like to share'
                            />
                            <Space height={5.0} />
                            <FoodSelectText
                                title='Non-Foods'
                                subTitle='Give away any goods that you think that usable'
                            />
                        </View>
                        <Space width={20.0} />
                        <RadioForm
                            radio_props={options}
                            initial={0}
                            onPress={(value) => {
                                setChosenOption(value);
                            }}
                        />
                    </View>
                    <Space height={20.0} />
                    <AppLineTextInput
                        hintText='Item Name'
                        onChangeText={(value) => setItemName(value)}
                    />
                    <Space height={20.0} />
                    <AppLineTextInput
                        hintText='Feasible Date and time to pick up'
                        onChangeText={(value) => setDateAndTime(value)}
                    />
                    <Space height={20.0} />
                    <TextInput
                        placeholder='Add special note here'
                        onChangeText={(value) => setSpecialNote(value)}
                        style={styles.comment}
                    />
                    <Space height={20.0} />
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            disabled={false}
                            color={CustomColors.primary}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Space width={20.0} />
                        <Text>Add my contact details to the post</Text>
                    </View>
                    <Space height={20.0} />
                    <AppButton
                        btnText='Add'
                        onPress={() => {
                            const data = {
                                imageUrl: imageUrl,
                                category: chosenOption,
                                itemName: itemName,
                                specialNote: specialNote,
                                pickDateAndTime: dateAndTime,
                                addContactInfo: toggleCheckBox
                            }
                            dispatch(uploadItem(data));
                        }}
                    />
                </View>
            </ScrollView>
            {isLoading && <AppLoader />}
        </>
    );
}
const styles = StyleSheet.create({
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
    main: {
        margin: 20.0,
    }
});

export default AddNewItemScreen;