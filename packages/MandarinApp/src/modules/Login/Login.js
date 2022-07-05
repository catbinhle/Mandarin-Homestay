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
import LoadingView from '../../components/Loading/LoadingView'
import EnterBox from "../../components/EnterBox/EnterBox"
import { getStoreData, clearAllData } from "../../utils"

const Login = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch() 
    const app = useSelector(state => state.app) 
    console.log('GREEN LOG APP REDUCER AT LOGIN: ', app.error)

    useEffect(() => {
        // clearAllData()
        getData()
    }, [])

    const getData = async() => {
        const stringValue = await getStoreData('@account')
        if (stringValue != null) {
            dispatch(appLogin({username: JSON.parse(stringValue).username, password: JSON.parse(stringValue).password}))
        }
    }

    const login = () => {
        dispatch(appLogin({username: username, password: password}))
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
                    {'MADARIN\nHOMESTAY'}
                </Text>
            </View>
            { loginView() }
            { app.isLoading && <LoadingView />}
            <View style={styles.registerView}>
                <Text style={styles.txtAccount}>Don't have account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.txtBtn}>Create a new account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
