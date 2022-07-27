import React, { useEffect, useState } from "react"
import { Alert } from "react-native"
import Home from '../modules/Home/Home'
import News from "../modules/News/News"
import Others from "../modules/Others/Others"
import Login from "../modules/Login/Login"
import Register from "../modules/Register/Register"
import Booking from "../modules/Booking/Booking"
import Map from "../modules/Map/Map"
import NewsDetail from "../modules/NewsDetail/NewDetail"
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import messaging from '@react-native-firebase/messaging'
// import notifee, { EventType } from '@notifee/react-native';

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

const Navigator = ({navigation}) => {
    // const navigation = useNavigation()
    const [loading, setLoading] = useState(true);
    const [initialRoute, setInitialRoute] = useState('Login');
    const app = useSelector(state => state.app)
    useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    // messaging().onNotificationOpenedApp(remoteMessage => {
    //     console.log(
    //       'Notification caused app to open from background state:',
    //       remoteMessage.notification,
    //     );
    //     navigation.navigate(remoteMessage.data.type);
    //   });
  
    //   // Check whether an initial notification is available
    //   messaging()
    //     .getInitialNotification()
    //     .then(remoteMessage => {
    //       if (remoteMessage) {
    //         console.log(
    //           'Notification caused app to open from quit state:',
    //           remoteMessage.notification,
    //         );
    //         setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
    //       }
    //       setLoading(false);
    //     });
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
            // notifee.displayNotification({
            //     title: 'Foreground Service Notification',
            //     body: 'Press the Quick Action to stop the service',
            //     android: {
            //       channelId,
            //       actions: [
            //         {
            //           title: 'Stop',
            //           pressAction: {
            //             id: 'stop',
            //           },
            //         },
            //       ],
            //     },
            //   });
        })
  
        return unsubscribe;
      }, [])

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