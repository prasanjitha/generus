import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import CustomColors from '../config/CustomColors';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AccountScreen from '../screens/AccountScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Navigation from './Navigation';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30.0,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow,
        }}
    >
        <View
            style={{
                width: 60.0,
                height: 60.0,
                borderRadius: 30.0,
                backgroundColor: CustomColors.primary,
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
);
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: CustomColors.white,
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow,
                }
            }
            }
        >
            <Tab.Screen name='Home' component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                style={{
                                    width: 30.0,
                                    height: 30.0,
                                    alignSelf: 'center',
                                    tintColor: focused ? CustomColors.primary : CustomColors.secondary,
                                }}
                                source={require('../assets/icons8-home-page-30.png')} />
                            <Text
                                style={{
                                    color: focused ? CustomColors.primary : CustomColors.secondary,
                                    fontWeight: 'bold'
                                }}
                            >HOME</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Account' component={AccountScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                style={{
                                    width: 30.0,
                                    height: 30.0,
                                    alignSelf: 'center',
                                    tintColor: focused ? CustomColors.primary : CustomColors.secondary,
                                }}
                                source={require('../assets/icons8-search-in-list-48.png')} />
                            <Text
                                style={{
                                    color: focused ? CustomColors.primary : CustomColors.secondary,
                                    fontWeight: 'bold'
                                }}
                            >Lists</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Post' component={WelcomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Image source={require('../assets/icons8-plus-math-30.png')} />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }} />
            <Tab.Screen name='SignIN' component={Navigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                style={{
                                    width: 30.0,
                                    height: 30.0,
                                    alignSelf: 'center',
                                    tintColor: focused ? CustomColors.primary : CustomColors.secondary,
                                }}
                                source={require('../assets/icons8-bell-24.png')} />
                            <Text
                                style={{
                                    color: focused ? CustomColors.primary : CustomColors.secondary,
                                    fontWeight: 'bold'
                                }}
                            >Noti</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name='SignUp' component={SignUpScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                style={{
                                    width: 30.0,
                                    height: 30.0,
                                    alignSelf: 'center',
                                    tintColor: focused ? CustomColors.primary : CustomColors.secondary,
                                }}
                                source={require('../assets/icons8-male-user-24.png')} />
                            <Text
                                style={{
                                    color: focused ? CustomColors.primary : CustomColors.secondary,
                                    fontWeight: 'bold'
                                }}
                            >Account</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0.0,
            height: 10.0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5.0,
    }
});
export default Tabs;