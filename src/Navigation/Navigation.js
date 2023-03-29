import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import AddCarityScreen from '../screens/AddCarityScreen';
import AdditionalInfoScreen from '../screens/AdditionalInfoScreen';
import AddNewItemScreen from '../screens/AddNewItemScreen';
import HomeScreen from '../screens/HomeScreen';
import MainScreen from '../screens/MainScreen';
import MyListingScreen from '../screens/MyListingScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabHomeScreen from '../screens/TabHomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import { loadProfile } from '../redux/actions/user-action';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

const Navigation = props => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProfile());
    }, []);
    const { loggedUser } = useSelector(state => state.userReducers);
    return (
        <NavigationContainer>
            {Object.keys(loggedUser).length === 0 ? <Stack.Navigator initialRouteName='SignInScreen'
            // screenOptions={{ headerShown: false, }}
            >
                <Stack.Screen options={{ headerShown: true, }} name='HomeScreen' component={HomeScreen} />
                <Stack.Screen options={{ headerShown: false, }} name='AdditionalInfoScreen' component={AdditionalInfoScreen} />
                <Stack.Screen options={{ headerShown: true, headerTitle: "My Profile", headerTitleAlign: 'center' }} name='UserProfile' component={UserProfileScreen} />
                <Stack.Screen options={{ headerShown: false, }} name='MainScreen' component={MainScreen} />
                <Stack.Screen options={{ headerShown: false, }} name='SignInScreen' component={SignInScreen} />
                <Stack.Screen options={{ headerShown: false, }} name='SignUpScreen' component={SignUpScreen} />
                <Stack.Screen options={{ headerShown: false, }} name='TabHomeScreen' component={TabHomeScreen} />
                <Stack.Screen options={{
                    headerShown: true,
                    title: 'My Listings(3)',
                    headerTitleAlign: 'center'
                }} name='MyListingScreen' component={MyListingScreen} />
                <Stack.Screen options={{
                    headerShown: true,
                    title: 'Add Charity',
                    headerTitleAlign: 'center',
                }} name='AddCharity' component={AddCarityScreen} />
                <Stack.Screen options={{
                    headerShown: true,

                }} name='AddNewItemScreen' component={AddNewItemScreen} />
            </Stack.Navigator> : <Stack.Navigator initialRouteName='TabHomeScreen'
            // screenOptions={{ headerShown: false, }}
            >
                <Stack.Screen options={{ headerShown: true, }} name='HomeScreen' component={HomeScreen} />
                <Stack.Screen options={{ headerShown: false, }} name='AdditionalInfoScreen' component={AdditionalInfoScreen} />
                <Stack.Screen options={{ headerShown: true, headerTitle: "My Profile", headerTitleAlign: 'center' }} name='UserProfile' component={UserProfileScreen} />
                <Stack.Screen options={{ headerShown: false, }} name='MainScreen' component={MainScreen} />
                <Stack.Screen options={{ headerShown: false, }} name='SignInScreen' component={SignInScreen} />
                <Stack.Screen options={{ headerShown: false, }} name='SignUpScreen' component={SignUpScreen} />
                <Stack.Screen options={{ headerShown: false, }} name='TabHomeScreen' component={TabHomeScreen} />
                <Stack.Screen options={{
                    headerShown: true,
                    title: 'My Listings(3)',
                    headerTitleAlign: 'center'
                }} name='MyListingScreen' component={MyListingScreen} />
                <Stack.Screen options={{
                    headerShown: true,
                    title: 'Add Charity',
                    headerTitleAlign: 'center',
                }} name='AddCharity' component={AddCarityScreen} />
                <Stack.Screen options={{
                    headerShown: true,

                }} name='AddNewItemScreen' component={AddNewItemScreen} />
            </Stack.Navigator>}
        </NavigationContainer>
    )
}

export default Navigation;