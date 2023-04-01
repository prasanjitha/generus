import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StackNavigation from './TextNestedNavigation';
import { useSelector } from "react-redux";


const Feed = () => {
    const navigation = useNavigation();
    return (
        <View style={{ alignSelf: 'center' }}>
            <Text>Feed</Text>
            <Button title='View' onPress={() => navigation.navigate("TweetDetails")} />
        </View>
    )
}
const Account = ({ route }) =>
//useRoute();
(
    <View style={{ alignSelf: 'center', top: 100.0, }}>
        <Text>Account</Text>

    </View>
)
const Tab = createBottomTabNavigator();

export default TabNavigator = (props) => {
    const { hideTabBar } = useSelector(state => state.userReducers);
    const hide = hideTabBar;
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: 'tomato',
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'black'
            }}
        >
            <Tab.Screen options={{
                headerShown: false,
                tabBarStyle: { display: hide ? "none" : "flex" },
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
            }} name="Feed" component={StackNavigation}
            />
            <Tab.Screen options={{
                headerShown: true,
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account-circle-outline" size={size} color={color} />
            }} name="Account" component={Account} />
        </Tab.Navigator>
    )
}

