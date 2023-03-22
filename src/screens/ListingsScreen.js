import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import CustomColors from '../config/CustomColors';
import Screen from './Screen';

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        uri: 'https://www.androidauthority.com/wp-content/uploads/2021/09/Genshin-Impact-best-adventure-games-for-Android.jpg',
    },
    {
        id: 2,
        title: 'Red jacket for sale',
        price: 100,
        uri: 'https://www.androidauthority.com/wp-content/uploads/2021/09/Genshin-Impact-best-adventure-games-for-Android.jpg',
    },
]
function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        uri={item.uri}
                    />
                }

            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: CustomColors.gray,
        padding: 20.0,
    }
});
export default ListingsScreen;