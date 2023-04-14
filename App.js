import React, { useEffect } from 'react';
import { Platform, View } from 'react-native';
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
import { Provider, useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import StackNavigation from './src/screens/navigations/TextNestedNavigation';
import TabNavigation from './src/screens/navigations/TestBottomTabNavigation';
import WidlyWelcome from './src/screens/widly/screens/WidlyWelcome';
import WdCard from './src/screens/widly/compnents/WdCard';
import WdListingDetails from './src/screens/widly/compnents/WdListingDetails';
import WdMessageScreen from './src/screens/widly/screens/WdMessageScreen';
import WdIcon from './src/screens/widly/compnents/WdIcon';
import WdListItem from './src/screens/widly/compnents/WdListItem';
import WdAccountScreen from './src/screens/widly/screens/WdAccountScreen';
import WdPicker from './src/screens/widly/compnents/WdPicker';
import { useState } from 'react';
import WdRegisterScreen from './src/screens/widly/screens/WdRegisterScreen';
import WdLoginScreen from './src/screens/widly/screens/WdLoginScreen';
import WdStackNavigation from './src/screens/widly/wdNavigation/WdNavigation'
import WdAddPost from './src/screens/widly/screens/WdAddPost';
import WdAuthNavigator from './src/screens/widly/wdNavigation/WdAuthNavigator';
import WdNavigationTheme from './src/screens/widly/wdNavigation/WdNavigationTheme';
import WdAppNavigator from './src/screens/widly/wdNavigation/WdAppNavigator';
import { getAllPosts } from './src/redux/actions/user-action';
import { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WdOfflineNotice from './src/screens/widly/compnents/WdOfflineNotice';
import LandingPage from './src/screens/LandingPage';


const categories = [
  { lable: 'Furniture', value: 1 },
  { lable: 'Clothing', value: 2 },
  { lable: 'Cameras', value: 3 },
  { lable: 'Phones', value: 4 },
];


function App(props) {
  // const registerForPushNotifications = async () => {
  //   try {
  //     const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     if (!permission.granted) return;

  //     const token = await Notification.getExpoPushTokenAsync();
  //     console.log(token);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // registerForPushNotifications();
  // const unsubscribe = NetInfo.addEventListener(netInfo => console.log(netInfo));
  // const demo = async () => {
  //   try {
  //     await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }));
  //     const value = await AsyncStorage.getItem('person');
  //     const person = JSON.parse(value);
  //     console.log(person);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // demo();
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
    <>
      <WdOfflineNotice />
      <Provider store={Store}>
        <NavigationContainer theme={WdNavigationTheme}>


          <Screen>
            {/* <WdPicker selectedItem={category} onSelectItem={(item) => setCategory(item)} items={categories} icon='apps' placeholder='Category' /> */}
            {/* <WdListItem
          title='My title'
          ImageComponent={<WdIcon name='email' size={50} backgroundColor='red' iconColor='white' />}

        /> */}
            {/* <WdStackNavigation /> */}
            {/* <WdAddPost /> */}
            {/* <WdAuthNavigator /> */}
            {/* <WdAppNavigator /> */}
            <LandingPage />

            <Toast />
          </Screen>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;