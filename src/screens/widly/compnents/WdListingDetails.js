import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import WdColor from '../config/WdColor';
import WdListItem from './WdListItem';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WdTextInput from './WdTextInput';
import WidlyButton from './WidlyButton';

function WdListingDetails({ route, image = 'https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366_960_720.jpg', title = 'Red jacket for sale!', subTitle = '$100' }) {
    const listings = route.params;
    return (
        <ScrollView>
            <Image style={styles.image} source={{
                uri: listings.imageUrl
            }} />
            <View style={styles.detailsContiner}>
                <Text style={styles.title}>{listings.itemName}</Text>
                <Text style={styles.subTitle}>$ {listings.price}</Text>
            </View>
            <View style={styles.userContainer}>
                <WdListItem
                    title='Taniya Samaranayake'
                    subTitle='5 Listings'
                    image='https://cdn.pixabay.com/photo/2014/05/26/14/01/beauty-354565_960_720.jpg'
                />
            </View>
            <View style={styles.message}>
                <WdTextInput
                    placeholder='Message...' />
                <WidlyButton btnText='CONTACT SELLER' />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    detailsContiner: {
        padding: 20.0,
    },
    image: {
        width: '100%',
        height: 300,
    },
    subTitle: {
        color: WdColor.secondary,
        fontWeight: 'bold',
        fontSize: 20.0,
        marginVertical: 10.0,
    },
    title: {
        fontSize: 24.0,
        fontWeight: '800',
    },
    userContainer: {
        bottom: 20.0,
    },
    message: {
        marginHorizontal: 20.0,
        bottom: 20.0,
    }
});
export default WdListingDetails;