import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function FoodSelectText({ title, subTitle }) {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    subTitle: {
        fontSize: 10,
    },
    title: {
        fontWeight: 'bold',
    },
});

export default FoodSelectText;