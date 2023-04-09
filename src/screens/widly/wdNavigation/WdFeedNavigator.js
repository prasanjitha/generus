import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WdListingsScreen from '../screens/WdListingsScreen';
import WdListingDetails from '../compnents/WdListingDetails';

const Stack = createNativeStackNavigator();

const WdFeedNavigator = () => (
    <Stack.Navigator >
        <Stack.Screen name='Listings' component={WdListingsScreen} options={{ headerTitleAlign: 'center', headerShown: false, }} />
        <Stack.Screen name='ListingDetails' options={{ title: 'Listing Details', headerTitleAlign: 'center' }} component={WdListingDetails} />
    </Stack.Navigator>
);
export default WdFeedNavigator;