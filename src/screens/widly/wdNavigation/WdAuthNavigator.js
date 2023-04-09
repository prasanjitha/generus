import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WidlyWelcome from '../screens/WidlyWelcome';
import WdLoginScreen from '../screens/WdLoginScreen';
import WdRegisterScreen from '../screens/WdRegisterScreen';


const Stack = createNativeStackNavigator();
export default WdAuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='WidlyWelcome' component={WidlyWelcome} />
            <Stack.Screen name='Login' component={WdLoginScreen} />
            <Stack.Screen name='Register' component={WdRegisterScreen} />
        </Stack.Navigator>
    )
}

