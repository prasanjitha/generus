import React from 'react';
import { View } from 'react-native';
import AppPicker from './src/components/AppPicker';
import AppTextInput from './src/components/AppTextInput';
import Card from './src/components/Card';
import MainScreen from './src/screens/MainScreen';
import AccountScreen from './src/screens/AccountScreen';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import ListingsScreen from './src/screens/ListingsScreen';
import MessageScreen from './src/screens/MessageScreen';
import Screen from './src/screens/Screen';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AdditionalInfoScreen from './src/screens/AdditionalInfoScreen';

function App(props) {
  return (
    <Screen>
      <AdditionalInfoScreen />

    </Screen>
  );
}

export default App;