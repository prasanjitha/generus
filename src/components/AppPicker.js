import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import CustomColors from '../config/CustomColors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from 'react-native';

function AppPicker({ icon, placeholder, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={CustomColors.lightGray} />}
                    <Text style={styles.text}>{placeholder}</Text>
                    <MaterialCommunityIcons name='chevron-down' size={20} color={CustomColors.lightGray} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Button title='Close' onPress={() => setModalVisible(false)} />
            </Modal>
        </>
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
    text: {
        flex: 1,
    },
    textInput: {
        fontSize: 18.0,
    },
});

export default AppPicker;