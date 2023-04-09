import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WdListItem from "../compnents/WdListItem";
import WdAddPost from "../screens/WdAddPost";
import WdAccountScreen from "../screens/WdAccountScreen";
import WdFeedNavigator from './WdFeedNavigator';
import WdAccountNavigator from './WdAccountNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WdNewListingsButton from '../compnents/WdNewListingsButton';
import { useDispatch } from 'react-redux';
import { getAllPosts } from '../../../redux/actions/user-action';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();

const WdAppNavigator = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPosts());
    }, []);
    return (
        <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }} >
            <Tab.Screen name="Feed" component={WdFeedNavigator} options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home' color={color} size={size} />,
                title: 'Listings', headerShown: false
            }} />
            <Tab.Screen
                name="AddPost" component={WdAddPost} options={({ navigation }) => ({
                    tabBarButton: () => <WdNewListingsButton onPress={() => navigation.navigate('AddPost')} />,
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='plus-circle' color={color} size={size} />,
                    title: 'Add Post',
                })} />
            <Tab.Screen name="Account" component={WdAccountNavigator} options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account' color={color} size={size} />,
                headerShown: false
            }} />
        </Tab.Navigator>
    )
}
    ;
export default WdAppNavigator;