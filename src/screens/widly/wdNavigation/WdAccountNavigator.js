import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WdAccountScreen from '../screens/WdAccountScreen';
import WdMessageScreen from '../screens/WdMessageScreen';
import WdAuthNavigator from './WdAuthNavigator';

const Stack = createNativeStackNavigator();

const WdAccountNavigator = () => (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name='Account' component={WdAccountScreen} />
        <Stack.Screen name='Messages' options={{ title: 'My Messages', }} component={WdMessageScreen} />
        <Stack.Screen name='Auth' options={{ title: 'My Messages', }} component={WdAuthNavigator} />
    </Stack.Navigator>
);
export default WdAccountNavigator;