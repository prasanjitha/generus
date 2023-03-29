import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Space from './Space';
import CardIconButton from './CardIconButton';
import CustomColors from '../config/CustomColors';

function MyListingsCard({
    itemName = 'Item Name',
    ownerName = 'Owner name',
    location = 'Location details',
    date = '2022.05.12',
    mainImageUrl = 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_960_720.jpg' }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.mainImage}
                source={{ uri: mainImageUrl }} />
            <Space width={10.0} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{itemName}</Text>
                <Text style={styles.subTitle}>{ownerName}</Text>
                <Text style={styles.subTitle}>{location}</Text>
                <Text style={styles.subTitle}>{date}</Text>
            </View>
            <View style={styles.iconContainer}>
                <View style={styles.iconDerection}>
                    <CardIconButton iconName={require('../assets/icons8-remove-24.png')} />
                    <Space width={10.0} />
                    <CardIconButton iconColor={CustomColors.primary} iconName={require('../assets/icons8-pencil-24.png')} />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 20.0,
        backgroundColor: CustomColors.white,
        borderRadius: 15.0,
        elevation: 1.0,
    },
    iconContainer: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 10.0,
        paddingBottom: 10.0,
    },
    iconDerection: {
        flexDirection: 'row',
    },
    mainImage: {
        width: 120.0,
        height: 120.0,
        borderTopLeftRadius: 15.0,
        borderBottomLeftRadius: 15.0,
    },
    subTitle: {
        fontSize: 16.0,
        fontWeight: '700',
        color: CustomColors.primary,
    },
    textContainer: {
        paddingTop: 10.0,
    },
    title: {
        fontSize: 17.0,
        fontWeight: 'bold',
    },
});
export default MyListingsCard;