import React from 'react';
import { TouchableOpacity, View } from 'react-native';

function SelectImage({ onPress }) {
    return (
        <TouchableOpacity

            onPress={onPress}>

            <View style={{
                width: 100,
                height: 100,
                backgroundColor: 'gray',
                borderRadius: 15,
            }}>

            </View>
        </TouchableOpacity>
    );
}

export default SelectImage;