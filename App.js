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
// import Navigation from './src/Navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/Navigation/Tabs';
import { Store } from './src/redux/store';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import StackNavigation from './src/screens/navigations/TextNestedNavigation';
import TabNavigation from './src/screens/navigations/TestBottomTabNavigation';

function App(props) {
  return (
    // <Provider store={Store}>
    //   {/* <NavigationContainer> */}
    //   <Screen>
    //     {/* <Tabs /> */}
    //     <Navigation />
    //     <Toast />
    //   </Screen>
    //   {/* </NavigationContainer> */}
    // </Provider>
    <Provider store={Store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;