import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import WdColor from '../config/WdColor';

function WdCard({ onPress, image = 'https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366_960_720.jpg', title = 'Red jacket for sale!', subTitle = '$100' }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{
                    uri: image
                }} />
                <View style={styles.detailsContiner}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 15.0,
        marginBottom: 20.0,
        overflow: 'hidden'
    },
    detailsContiner: {
        padding: 20.0,
    },
    image: {
        width: '100%',
        height: 200,
    },
    subTitle: {
        color: WdColor.secondary,
        fontWeight: '800'
    },
    title: {
        marginBottom: 7.0,
        fontWeight: 'bold',
        fontSize: 18.0,
    },

});

export default WdCard;