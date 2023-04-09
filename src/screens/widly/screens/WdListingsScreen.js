import React, { useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import WdCard from '../compnents/WdCard';
import { useNavigation } from '@react-navigation/native';
import WdColor from '../config/WdColor';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/actions/user-action';
import { useState } from 'react';
import WdLoader from '../compnents/WdLoader';
import WdListings from '../api/WdListings';

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_960_720.jpg',
    },
    {
        id: 2,
        title: 'Red jacket for sale',
        price: 200,
        imageUrl: 'https://cdn.pixabay.com/photo/2017/10/19/18/23/woman-2868705_960_720.jpg',
    }
]
function WdListingsScreen(props) {
    const navigation = useNavigation();
    const [myList, setMyList] = useState();
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const { isLoading, allPosts } = useSelector(state => state.userReducers);

    // useEffect(() => {
    //     loadListings();
    // }, []);

    const loadListings = async () => {
        const response = await WdListings.getListings();
        if (!response.ok) return setError(true);
        console.log(response.data);
        setError(false);
        setMyList(response.data); dd

    }
    return (
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: WdColor.light, padding: 20.0 }}
                data={allPosts}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <WdCard
                        title={item['itemName']}
                        subTitle={"$" + item['price']}
                        image={item['imageUrl']}
                        onPress={() => navigation.navigate('ListingDetails', item)}
                    />
                }
            />
            {isLoading && <WdLoader />}
        </>
    );
}

export default WdListingsScreen;