import React from "react"
import Home from '../modules/Home/Home'
import News from "../modules/News/News"
import Others from "../modules/Others/Others"
import Login from "../modules/Login/Login"
import Register from "../modules/Register/Register"
import Booking from "../modules/Booking/Booking"
import Map from "../modules/Map/Map"
import NewsDetail from "../modules/NewsDetail/NewDetail"
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'

const HomeStack = createNativeStackNavigator()
const NewsStack = createNativeStackNavigator()
const OthersStack = createNativeStackNavigator()
const LoginStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

Icon.loadFont()

const HomeStackScreen = () => (
    <HomeStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <HomeStack.Screen
            options={{
                headerShown: false
            }} 
            name="Home" 
            component={Home}
        />
        <HomeStack.Screen
            options={{
                headerShown: false
            }} 
            name="Map" 
            component={Map}
        />
        <HomeStack.Screen
            options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#7f5bc7',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerBackTitle: ''
            }} 
            name="Booking" 
            component={Booking}
        />
    </HomeStack.Navigator>
)

const NewsStackScreen = () => (
    <NewsStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#7f5bc7',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerBackTitle: ''
        }}
    >
        <NewsStack.Screen name="News" component={News} />
        <NewsStack.Screen 
            name="NewsDetail" 
            options={({ route }) => ({ title: route.params?.title })}
            component={NewsDetail} />
    </NewsStack.Navigator>
)

const OthersStackScreen = () => (
    <OthersStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#7f5bc7',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerBackTitle: ''
        }}
    >
        <OthersStack.Screen name="Others" component={Others} />
    </OthersStack.Navigator>
)

const LoginStackScreen = () => (
    <LoginStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <LoginStack.Screen name="Login" component={Login} />
        <LoginStack.Screen name="Register" component={Register} />
    </LoginStack.Navigator>
)

const TabsScreen = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = 'home'
                } else if (route.name === 'News') {
                    iconName = 'film'
                } else {
                    iconName = 'bars'
                }
                return <Icon name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#81898a',
            size: 24,
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#7f5bc7'
            }
        })}
    >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="News" component={NewsStackScreen} />
        <Tab.Screen name="Others" component={OthersStackScreen} />
    </Tab.Navigator>
)

const Navigator = () => {
    const app = useSelector(state => state.app)
    return (
        <NavigationContainer>
            {
                app.userInfo?.token
                ?
                <TabsScreen />
                :
                <LoginStackScreen />
            }
        </NavigationContainer>
    )
}

export default Navigator