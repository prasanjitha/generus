import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CustomColors from '../config/CustomColors';

function Card({ uri, title, subTitle }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: uri }} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: CustomColors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailsContainer: {
        padding: 15.0,
    },
    image: {
        width: '100%',
        height: 200.0,
    },
    subTitle: {
        color: CustomColors.secondary,
        fontWeight: 'bold',
    },
    title: {

        marginBottom: 7,
    },
});

export default Card;