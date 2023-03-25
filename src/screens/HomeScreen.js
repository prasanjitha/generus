import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import CharityStoryCard from '../components/CharityStoryCard';
import ItemCard from '../components/ItemCard';
import Space from '../components/Space';
import CustomColors from '../config/CustomColors';

function HomeScreen(props) {
    const [isFood, setIsFood] = useState(true);
    return (
        <View style={styles.screen}>
            <View style={styles.search}>
                <Image source={require('../assets/search-mdpi.png')} />
                <Space width={20.0} />
                <Text>Search item here</Text>
            </View>
            <Space height={20.0} />
            <Text style={styles.charityTitle} >Charity and Social Services</Text>
            <Space width={20.0} />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.addCharity}>
                    <Image style={styles.addImageIcon} source={require('../assets/icon_add.png')} />
                    <Image style={styles.charityImage} source={{
                        uri: 'https://cdn.pixabay.com/photo/2017/09/01/21/53/sunglasses-2705642_960_720.jpg'
                    }} />
                </View>
                <Space width={20.0} />
                <CharityStoryCard
                    avator='https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_960_720.jpg'
                    bgImage='https://cdn.pixabay.com/photo/2017/09/01/21/53/sunglasses-2705642_960_720.jpg'
                />
            </View>
            <Space height={20.0} />
            <Text style={styles.charityTitle} >Items near by</Text>
            <Space height={20.0} />
            <View style={styles.menuButton}>
                <TouchableOpacity onPress={() => setIsFood(false)}>
                    <View style={[styles.buttonFood, {
                        backgroundColor: isFood ? CustomColors.bgBlue : CustomColors.primary,
                    }]}>
                        <Text style={[styles.textFood, {
                            color: isFood ? CustomColors.primary : CustomColors.white,
                        }]}>Food</Text>
                    </View>
                </TouchableOpacity>
                <Space width={20.0} />
                <TouchableOpacity onPress={() => setIsFood(true)}>
                    <View style={[styles.buttonNonFood, {
                        backgroundColor: isFood ? CustomColors.primary : CustomColors.bgBlue,
                    }]}>
                        <Text style={[styles.textNonFood, {
                            color: isFood ? CustomColors.white : CustomColors.primary,
                        }]}>Non-Foods</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Space height={20.0} />
            {isFood ? <ItemCard
                image='https://cdn.pixabay.com/photo/2016/05/21/22/15/light-bulbs-1407610_960_720.jpg'
            /> : <ItemCard
                image='https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_960_720.jpg'
            />
            }
        </View>
    );
}
const styles = StyleSheet.create({
    addCharity: {
        height: 140.0,
        width: 100.0,
        borderRadius: 20.0,
        backgroundColor: CustomColors.bgBlue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addImageIcon: {
        top: 20.0,
    },
    buttonNonFood: {
        width: 120.0,
        height: 40.0,
        borderRadius: 10.0,
        backgroundColor: CustomColors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonFood: {
        width: 90.0,
        height: 40.0,
        borderRadius: 10.0,
        backgroundColor: CustomColors.bgBlue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    charityImage: {
        width: 40.0,
        height: 40.0,
        borderRadius: 25.0,
        bottom: -45.0
    },
    charityTitle: {
        fontSize: 18.0,
        fontWeight: '800',
    },
    menuButton: {
        flexDirection: 'row',
    },
    screen: {
        backgroundColor: CustomColors.white,
        flex: 1,
        padding: 20.0,
    },
    search: {
        width: '100%',
        height: 50.0,
        backgroundColor: CustomColors.bgBlue,
        borderRadius: 20.0,
        flexDirection: 'row',
        paddingLeft: 30.0,
        alignItems: 'center'
    },
    textNonFood: {
        color: CustomColors.white,
        fontWeight: '800',
    },
    textFood: {
        color: CustomColors.primary,
        fontWeight: '800',
    },
});

export default HomeScreen;