import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CustomColors from '../config/CustomColors';
import Space from './Space';

function ItemCard({ image, itemName = 'itemName', location = 'location', owner = 'Ower name', date = Date.now() }) {
    return (
        <View style={styles.foodCard}>
            <Image style={styles.imageCard} source={{ uri: image }} />
            <Space width={10.0} />
            <View style={{ alignSelf: 'center' }}>
                <Text style={styles.itemName}>{itemName}</Text>
                <Text style={styles.subDetails}>{owner}</Text>
                <Text style={styles.subDetails}>{location}</Text>
                <Text style={styles.subDetails}>{date}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    foodCard: {
        flexDirection: 'row',
        borderRadius: 20,
        width: '100%',
        height: 130.0,
        elevation: 2.0,
        overflow: 'hidden',
    },
    imageCard: {
        width: 120.0,
        height: 130.0
    },
    itemName: {
        fontSize: 18.0,
        fontWeight: 'bold',
        bottom: 10.0,
    },
    subDetails: {
        color: CustomColors.primary,
        fontSize: 16.0,
        fontWeight: '700',
        bottom: 5.0,
    },
});

export default ItemCard;