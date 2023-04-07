import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import CustomColors from '../config/CustomColors';
import WdColor from '../screens/widly/config/WdColor';

function ListItem({ uri, title, subTitle, onPress, ImageComponent, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={CustomColors.gray}
                onPress={() => onPress}
            >
                <View style={styles.container}>
                    {ImageComponent}
                    {uri && <Image style={styles.image} source={{ uri: uri }} />}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: WdColor.white,
    },
    detailsContainer: {
        marginLeft: 15.0,
        justifyContent: 'center',
    },
    image: {
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
    },
    subTitle: {
        color: CustomColors.lightGray,
    },
    title: {
        fontWeight: 'bold',
    }
});

export default ListItem;