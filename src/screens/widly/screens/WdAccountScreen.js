import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import WdListItem from '../compnents/WdListItem';
import WdColor from '../config/WdColor';
import ListItem from '../../../components/ListItem';
import WdIcon from '../compnents/WdIcon';
import WdListItemSeperator from '../compnents/WdListItemSeperator';
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
        }
    }
]
function WdAccountScreen(props) {
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
                            title={item.title}
                            ImageComponent={<WdIcon name={item.icon.name} size={50} backgroundColor={item.icon.backgroundColor} iconColor='white' />}
                        />}
                    ItemSeparatorComponent={WdListItemSeperator}
                />
            </View>
            <WdListItem
                title='Log Out'
                ImageComponent={<WdIcon name='Log Out' backgroundColor='#ffe66d' />}
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