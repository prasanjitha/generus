import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import WdColor from '../config/WdColor';
import WdListItem from './WdListItem';

function WdListingDetails({ image = 'https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366_960_720.jpg', title = 'Red jacket for sale!', subTitle = '$100' }) {
    return (
        <View>
            <Image style={styles.image} source={{
                uri: image
            }} />
            <View style={styles.detailsContiner}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
            <View style={styles.userContainer}>
                <WdListItem />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContiner: {
        padding: 20.0,
    },
    image: {
        width: '100%',
        height: 300,
    },
    subTitle: {
        color: WdColor.secondary,
        fontWeight: 'bold',
        fontSize: 20.0,
        marginVertical: 10.0,
    },
    title: {
        fontSize: 24.0,
        fontWeight: '600',
    },
    userContainer: {
        marginLeft: 20.0,
    }
});
export default WdListingDetails;