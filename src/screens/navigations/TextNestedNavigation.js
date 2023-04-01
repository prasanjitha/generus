import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { hideTabBar, showTabBar } from '../../redux/actions/user-action';
import { useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tweets = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('again called');
    }, [])


    return (
        <View style={{ alignSelf: 'center' }}>
            <Text>Tweets</Text>
            <Button title='View' onPress={() => {
                dispatch(hideTabBar());
                navigation.navigate("TweetDetails", { id: 'Kmaal' })
            }} />
        </View>
    )
}
const TweetDetails = ({ route }) => {
    //useRoute();
    return (
        <View style={{ alignSelf: 'center' }}>
            <Text>TweetDetails </Text>
        </View>
    )
}

const Stack = createNativeStackNavigator();
export default StackNavigation = ({ size, color }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    return (
        <Stack.Navigator>
            <Stack.Screen name='Tweets' component={Tweets} />
            <Stack.Screen
                options={{
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => {
                            dispatch(showTabBar());
                            navigation.navigate("Tweets", { id: 'Kmaal' })
                        }}>
                            <MaterialCommunityIcons name="arrow-left" size={25} color='red' />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'center'

                }}
                name='TweetDetails' on component={TweetDetails} />
        </Stack.Navigator>
    )
}

