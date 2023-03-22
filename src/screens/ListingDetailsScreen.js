import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem';
import CustomColors from '../config/CustomColors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={{ uri: 'https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2019/12/25/9d4ca4f1/ulala.jpg' }} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Red jacket for sale</Text>
                <Text style={styles.subTitle}>$100</Text>
                <ListItem
                    uri='https://www.enduins.com/wp-content/uploads/2020/07/Guardian-Tales-Global.jpg'
                    title='Nirmal Prasanjitha'
                    subTitle='5 Listings'
                    onPress={() => { console.log(item) }}
                    renderRightActions={() => (
                        <View
                            style={{
                                backgroundColor: 'red',
                                width: 200.0,
                            }}
                        >

                        </View>
                    )}
                />

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300,
    },
    subTitle: {
        color: CustomColors.secondary,
        fontWeight: 'bold',
        fontSize: 20.0,
        marginVertical: 10.0,
        marginBottom: 36.0,
    },
    title: {
        fontSize: 24.0,
        fontWeight: 'bold',
    }
});

export default ListingDetailsScreen;