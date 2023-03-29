import React from 'react';
import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppLineTextInput from '../components/AppLineTextInput';
import Space from '../components/Space';
import { loadProfile } from '../redux/actions/user-action';

function UserProfileScreen(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProfile())
    }, [])
    const { loggedUser } = useSelector(state => state.userReducers);
    console.log(loadProfile);
    return (
        <View style={styles.screen}>
            <Image style={{ width: 150, height: 150, borderRadius: 75 }} source={{ uri: 'https://cdn.pixabay.com/photo/2015/11/03/10/23/watercolor-1020509_960_720.jpg' }} />
            <Space height={20.0} />
            <AppLineTextInput
                value={loggedUser.email}
                hintText='Email' />
            <Space height={20.0} />
            <AppLineTextInput
                value={loggedUser.mobile}
                hintText='Mobile number' />
            <Space height={20.0} />
            <AppLineTextInput
                value={loggedUser.province}
                hintText='Province' />
            <Space height={20.0} />
            <AppLineTextInput
                value={loggedUser.distric}
                hintText='Distric' />
            <Space height={20.0} />
            <AppLineTextInput
                value={loggedUser.town}
                hintText='Home town' />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        margin: 20.0,
    }
});
export default UserProfileScreen;