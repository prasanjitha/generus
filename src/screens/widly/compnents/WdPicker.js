
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, FlatList, Modal, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import WdColor from '../config/WdColor';
import WdPickerItem from './WdPickerItem';
import WdCategoryPickerItem from './WdCategoryPickerItem';

function WdPicker({ icon, items, onSelectItem, placeholder, numColumns = 1, selectedItem }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20.0} color={WdColor.lightGray} style={styles.icon} />}
                    <Text style={styles.text}>{selectedItem ? selectedItem.lable : placeholder}</Text>
                    <MaterialCommunityIcons name='chevron-down' size={20.0} color={WdColor.lightGray} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    numColumns={numColumns}
                    renderItem={({ item }) => <WdCategoryPickerItem
                        item={item}
                        lable={item.lable}
                        onPress={() => {
                            setModalVisible(false);
                            onSelectItem(item);
                        }}
                    />}
                />
            </Modal>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: WdColor.light,
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
        color: WdColor.lightGray,
        fontSize: 16.0,
    },
    textInput: {
        fontSize: 18.0,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color: WdColor.dark,
    },
});

export default WdPicker;