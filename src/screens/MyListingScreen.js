import React from 'react';
import { useEffect } from 'react';
import {
    FlatList,
    ScrollView,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import MyListingsCard from '../components/MyListingsCard';
import { loadMyItems } from '../redux/actions/user-action';

function MyListingScreen(props) {
    const dispatch = useDispatch();
    const { myItems } = useSelector(state => state.userReducers);
    useEffect(() => {
        dispatch(loadMyItems());
    }, []);
    console.log(myItems.length);
    return (
        <ScrollView >
            <FlatList
                data={myItems}
                renderItem={({ item }) => <MyListingsCard mainImageUrl={item.imageUrl} />}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    );
}

export default MyListingScreen;