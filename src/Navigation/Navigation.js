import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddNewItemScreen from '../screens/AddNewItemScreen';
import HomeScreen from '../screens/HomeScreen';
import MainScreen from '../screens/MainScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabHomeScreen from '../screens/TabHomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='AddNewItemScreen'
            >
                <Stack.Screen screenOptions={{ headerShown: false, }} name='HomeScreen' component={HomeScreen} />
                <Stack.Screen screenOptions={{ headerShown: false, }} name='MainScreen' component={MainScreen} />
                <Stack.Screen screenOptions={{ headerShown: false, }} name='SignInScreen' component={SignInScreen} />
                <Stack.Screen screenOptions={{ headerShown: false, }} name='SignUpScreen' component={SignUpScreen} />
                <Stack.Screen screenOptions={{ headerShown: false, }} name='TabHomeScreen' component={TabHomeScreen} />
                <Stack.Screen screenOptions={{
                    headerShown: true,

                }} name='AddNewItemScreen' component={AddNewItemScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;