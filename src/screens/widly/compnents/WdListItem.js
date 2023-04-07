import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import WdColor from '../config/WdColor';

function WdListItem({ onPress, ImageComponent, image, title, subTitle }) {
    return (
        <TouchableHighlight
            underlayColor={WdColor.light}
            onPress={onPress}>
            <View style={styles.container}>
                {ImageComponent}
                {image && <Image style={styles.image} source={{ uri: image }} />}
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                </View>
            </View>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15.0,
        backgroundColor: WdColor.white,
    },
    detailsContainer: {
        marginLeft: 10.0,
        justifyContent: 'center',
    },
    image: {
        width: 70.0,
        height: 70.0,
        borderRadius: 35.0,

    },
    subTitle: {
        color: WdColor.lightGray,
    },
    title: {
        fontWeight: '800',
    }
});

export default WdListItem;