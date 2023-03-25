import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Tabs from '../Navigation/Tabs';
import Screen from './Screen';

function TabHomeScreen(props) {
    return (
        <NavigationContainer independent={true}>
            <Screen>
                <Tabs />
            </Screen>
        </NavigationContainer>
    );
}

export default TabHomeScreen;