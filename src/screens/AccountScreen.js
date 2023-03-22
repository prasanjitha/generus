import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import CustomColors from '../config/CustomColors';
import Screen from './Screen';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: CustomColors.primary,
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: CustomColors.secondary,
        },
    }
]
function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title='Nirmal Prasanjitha'
                    subTitle='nirmal@gmail.com'
                    uri='https://www.teahub.io/photos/full/311-3116253_boys-pics-for-dp-handsome-boys-dp.jpg'
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => <ListItem
                        title={item.title}
                        ImageComponent={
                            <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                        }


                    />}
                />
            </View>
            <View style={styles.container}>
                <ListItem
                    title="Log Out"
                    ImageComponent={<Icon name="logout" backgroundColor='#ffe66d'
                    />}
                />
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20.0,
        backgroundColor: CustomColors.white,
    },
    screen: {
        backgroundColor: CustomColors.gray,
    }
});
export default AccountScreen;