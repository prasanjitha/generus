
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ImageInput({ imageUrl }) {
    return (
        <View style={styles.container}>
            {!imageUrl && <MaterialCommunityIcons color='grey' name='camera' size={40} />}
            {imageUrl && <Image source={{ uri: imageUrl }}
                style={styles.images}

            />}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {

    },
    images: {
        height: 100,
        width: 100,
    }
});

export default ImageInput;