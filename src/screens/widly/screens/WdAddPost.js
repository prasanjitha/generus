import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import WdTextInput from '../compnents/WdTextInput';
import WidlyButton from '../compnents/WidlyButton';
import WdPicker from '../compnents/WdPicker';
import { useState } from 'react';
import WdSpace from '../compnents/WdSpace';
import { useDispatch, useSelector } from 'react-redux';
import { pickImage } from '../../../redux/actions/user-action';
import { uploadPost } from '../../../redux/actions/user-action';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WdColor from '../config/WdColor';
import WdLoader from '../compnents/WdLoader';
import { useNavigation } from '@react-navigation/native';
import { getAllPosts } from '../../../redux/actions/user-action';

const categories = [
    { lable: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
    { lable: 'Clothing', value: 2, backgroundColor: 'green', icon: 'email' },
    { lable: 'Cameras', value: 3, backgroundColor: 'blue', icon: 'lock' },
    { lable: 'Cars', value: 4, backgroundColor: 'purple', icon: 'car-sports' },
    { lable: 'Games', value: 5, backgroundColor: 'navy', icon: 'google-controller' },
    { lable: 'Spoorts', value: 6, backgroundColor: 'orange', icon: 'football-helmet' },
    { lable: 'Books', value: 7, backgroundColor: 'gray', icon: 'book-open-page-variant' },
    { lable: 'Movies & Music', value: 9, backgroundColor: 'fuchsia', icon: 'filmstrip' },
    { lable: 'Others', value: 8, backgroundColor: 'maroon', icon: 'dots-horizontal' },
];
function WdAddPost(props) {
    const [category, setCategory] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [phone, setPhone] = useState();
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const { imageUrl, isLoading, isImgUploading } = useSelector(state => state.userReducers);
    console.log(isImgUploading);
    return (
        <>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                {imageUrl === 'imageUri' && isImgUploading === false ? <TouchableOpacity onPress={() => dispatch(pickImage())}>
                    <View style={styles.addImage}>
                        <MaterialCommunityIcons name='plus' size={30} color={WdColor.lightGray} />
                    </View>
                </TouchableOpacity> : isImgUploading === true ? <View style={{ width: 150, height: 150, borderRadius: 15.0, overflow: 'hidden', alignSelf: 'center' }}><WdLoader /></View> : <Image style={{ width: 150, height: 150, borderRadius: 15.0, alignSelf: 'center' }} source={{ uri: imageUrl }} />}
                <WdSpace height={20.0} />
                <WdTextInput
                    onChangeText={(text) => setTitle(text)}
                    placeholder='Title' />
                <WdTextInput
                    onChangeText={(text) => setPrice(text)}
                    placeholder='Price' />
                <WdTextInput
                    onChangeText={(text) => setDescription(text)}
                    placeholder='Description' />
                <WdTextInput
                    onChangeText={(text) => setPhone(text)}
                    placeholder='Mobile' />
                <WdPicker numColumns={3} selectedItem={category} onSelectItem={(item) => setCategory(item)} items={categories} icon='apps' placeholder='Category' />
                <WdSpace height={60.0} />
                <WidlyButton btnText='POST' onPress={() => {
                    const data = {
                        imageUrl: imageUrl,
                        title: title,
                        price: price,
                        description: description,
                        category: category,
                        phone: phone,
                    }
                    console.log(data);
                    dispatch(uploadPost(data, navigation));
                    dispatch(getAllPosts());
                    // navigation.navigate('Feed');
                }} />
            </ScrollView>
            {isLoading && <WdLoader />}
        </>
    );
}
const styles = StyleSheet.create({
    addImage: {
        width: 100,
        height: 100,
        backgroundColor: WdColor.light,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: WdColor.lightGray,
        borderStyle: 'dashed',
    },
    container: {
        margin: 20.0,
    }
});

export default WdAddPost;