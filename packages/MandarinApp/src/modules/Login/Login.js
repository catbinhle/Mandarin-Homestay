import React, { useEffect, useState } from "react"
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image 
} from 'react-native'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux' 
import { appLogin, appResetError } from '../../actions/AppActions'
import images from "../../defines/Image"
import { LoadingView } from '../../components'
import EnterBox from "../../components/EnterBox/EnterBox"
import { Utils } from "../../utils"
// import {
//     notifications,
//     messages,
//     NotificationMessage,
//     Android
// } from "react-native-firebase-push-notifications"
// import { PushNotify } from '../../utils'
// import notifee, { AndroidVisibility } from '@notifee/react-native'
import messaging from '@react-native-firebase/messaging'

const Login = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [FCM, setToken] = useState('')
    const dispatch = useDispatch() 
    const app = useSelector(state => state.app) 
    console.log('GREEN LOG APP REDUCER AT LOGIN: ', app.error)

    useEffect(async() => {
        // clearAllData()
        // let token = await PushNotify.getToken()
        // console.log('Token Android: ', token)
        // PushNotify.onNotificationListener()
        // PushNotify.onNotificationOpenedListener()
        // PushNotify.getInitialNotification()
        async function fetchData() {
            const generatedToken = await getFirebaseToken()
            setToken(generatedToken)
            if (generatedToken !== "") getData(generatedToken)
        }
        fetchData()
    }, [])

    const getFirebaseToken = async () => {
        // Register the device with FCM
        await messaging().registerDeviceForRemoteMessages()
    
        // Get the token
        const generatedToken = await messaging().getToken()
        return generatedToken
    }

    console.log('APP NOTIFY TOKEN: ', FCM)

    const getData = async(fcm) => {
        const stringValue = await Utils.getStoreData('@account')
        if (stringValue != null) {
            dispatch(appLogin({username: JSON.parse(stringValue).username, password: JSON.parse(stringValue).password, fcm: fcm}))
        }
    }

    const login = () => {
        dispatch(appLogin({username: username, password: password, fcm: FCM}))
    }

    const enterBox = ({ title, isPassword = false, placeholder, value, changeText }) => (
        <EnterBox 
            title={title}
            placeholder={placeholder}
            value={value}
            isPassword={isPassword}
            error={app.error}
            style={styles.boxView}
            changeText={(text) => {
                dispatch(appResetError())
                changeText(text)
            }}/>
    )

    const loginView = () => (
        <View style={styles.container}>
            {enterBox({
                title: 'Username',
                placeholder: "Enter username",
                value: username,
                changeText: (text) => setUsername(text)
            })}
            {enterBox({
                title: 'Password',
                isPassword: true,
                placeholder: "Enter password",
                value: password,
                changeText: (text) => setPassword(text)
            })}
            {app.error && <Text style={styles.txtErrorInfo}>{app.error}</Text>}
            <TouchableOpacity 
                style={[styles.btn, (username === '' || password === '') && styles.disableBtn]} 
                disabled={username === '' || password === ''}
                onPress={() => login()
            }>
                <Text style={styles.txtBtn}>Login</Text>
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={styles.container}>
            <Image style={styles.imgBG} source={images.login.loginBG}/>
            <View style={styles.overlayBGView}/>
            <View style={styles.infoView}>
                <Text style={styles.titleTxt}>
                    {'MANDARIN\nHOMESTAY'}
                </Text>
            </View>
            { loginView() }
            { app.isLoading && <LoadingView />}
            <View style={styles.registerView}>
                <Text style={styles.txtAccount}>Don't have account? </Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Register')
                    // await notifee.displayNotification({
                    //     title: '<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
                    //     subtitle: '&#129395;',
                    //     body:
                    //       'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
                    //     android: {
                    //       channelId,
                    //       color: '#4caf50',
                    //       actions: [
                    //         {
                    //           title: '<b>Dance</b> &#128111;',
                    //           pressAction: { id: 'dance' },
                    //         },
                    //         {
                    //           title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
                    //           pressAction: { id: 'cry' },
                    //         },
                    //       ],
                    //     },
                    //   });

                }}>
                    <Text style={styles.txtBtn}>Create a new account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
