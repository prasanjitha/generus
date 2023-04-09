import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import WdListItem from '../compnents/WdListItem';
import WdColor from '../config/WdColor';
import ListItem from '../../../components/ListItem';
import WdIcon from '../compnents/WdIcon';
import WdListItemSeperator from '../compnents/WdListItemSeperator';
import { logOutUser } from '../../../redux/actions/auth-action';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: WdColor.primary,
        }
    },
    {
        title: 'My Message',
        icon: {
            name: 'email',
            backgroundColor: WdColor.secondary,
        },
        targetScreen: 'Messages'
    }
]
function WdAccountScreen({ navigation }) {
    const dispatch = useDispatch();
    return (
        <View style={styles.screen}>
            <View style={styles.constiner}>
                <WdListItem
                    title='Taniya Samaranayake'
                    subTitle='programminggwtaniya@gmail.com'
                    image='https://cdn.pixabay.com/photo/2014/05/26/14/01/beauty-354565_960_720.jpg'
                />
            </View>
            <View style={styles.constiner}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) =>
                        <WdListItem
                            onPress={() => navigation.navigate(item.targetScreen)}
                            title={item.title}
                            ImageComponent={<WdIcon name={item.icon.name} size={50} backgroundColor={item.icon.backgroundColor} iconColor='white' />}
                        />}
                    ItemSeparatorComponent={WdListItemSeperator}
                />
            </View>
            <WdListItem
                title='Log Out'
                onPress={() =>
                    // dispatch(logOutUser(navigation));
                    navigation.navigate('Auth')
                }

                ImageComponent={<WdIcon name='logout' backgroundColor='#ffe66d' iconColor='white' size={50} />}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    constiner: {
        marginVertical: 10.0,
    },
    screen: {
        backgroundColor: WdColor.light,
        flex: 1,
    },
});
export default WdAccountScreen;