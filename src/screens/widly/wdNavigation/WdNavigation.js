import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WdRegisterScreen from '../screens/WdRegisterScreen';
import WdLoginScreen from '../screens/WdLoginScreen';
import WdMessageScreen from '../screens/WdMessageScreen';


const Stack = createNativeStackNavigator();
export default WdStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='Register' component={WdRegisterScreen} />
            <Stack.Screen name='Login' component={WdLoginScreen} />
            <Stack.Screen name='MessagePage' component={WdMessageScreen} />
        </Stack.Navigator>
    )
}

