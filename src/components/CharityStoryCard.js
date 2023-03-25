import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';

function CharityStoryCard({ bgImage, avator }) {
    return (
        <ImageBackground borderRadius={20} source={{ uri: bgImage }} resizeMode="cover" style={styles.charityStory}>
            <Image style={styles.storyImage} source={{
                uri: avator
            }} />
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    charityStory: {
        height: 140.0,
        width: 100.0,
        justifyContent: 'flex-end'
    },
    storyImage: {
        width: 40.0,
        height: 40.0,
        borderRadius: 25.0,
        marginLeft: 30.0,
        bottom: -20.0,
    },
});

export default CharityStoryCard;