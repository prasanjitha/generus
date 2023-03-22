import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import CustomColors from '../config/CustomColors';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={CustomColors.lightGray} />}
            <TextInput {...otherProps} style={styles.textInput} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: CustomColors.gray,
        borderRadius: 25.0,
        flexDirection: 'row',
        width: '100%',
        padding: 15.0,
        marginVertical: 10.0,
    },
    icon: {
        marginRight: 10.0,
    },
    textInput: {
        fontSize: 18.0,
    },
});

export default AppTextInput;