import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MainScreen from '../screens/MainScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabHomeScreen from '../screens/TabHomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SignInScreen' screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='MainScreen' component={MainScreen} />
                <Stack.Screen name='SignInScreen' component={SignInScreen} />
                <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
                <Stack.Screen name='TabHomeScreen' component={TabHomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;