import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import SignOut from "../screens/signout";
import UserInfo from "../screens/userInfo";
import { NavigationContainer } from "@react-navigation/native";
import HomeIcon from "../assets/icons/HomeIcon";
import SignOutIcon from "../assets/icons/SignOutIcon";
import UserIcon from "../assets/icons/UserIcon";

const Tab = createBottomTabNavigator();
export const BottomTab = () => {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} options={{
                tabBarIcon: () => <HomeIcon />
            }} />
            <Tab.Screen name='signout' component={SignOut} options={{
                
            }} />
            <Tab.Screen name='userInfo' component={UserInfo} options={{
              
            }} />
        </Tab.Navigator>
    </NavigationContainer>
}