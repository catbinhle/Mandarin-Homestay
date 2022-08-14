import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux' 
import images from "../../defines/Image"
import EnterBox from "../../components/EnterBox/EnterBox"
import { appRegister, appResetError, appLogin } from '../../actions/AppActions'
import Icon from 'react-native-vector-icons/FontAwesome'
import { LoadingView, ResultView } from '../../components'

Icon.loadFont()

const Register = ({navigation}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLasttName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [wrongPassAgain, setWrongPassAgain] = useState(false)
    const app = useSelector(state => state.app) 
    const dispatch = useDispatch() 

    useEffect(() => {
        dispatch(appResetError())
    }, [])

    const register = () => {
        dispatch(appRegister({
            username: username, 
            password: password, 
            email: email,
            firstName: firstName, 
            lastName: lastName,
            phoneNumber: phoneNumber
        }))
    }

    const login = () => {
        dispatch(appLogin({username: username, password: password}))
    }

    const verifyInfo = () => {
        if (username === '' || password === '' ||email === ' '|| firstName === '' || lastName === '' || username === '' || passwordAgain === '') return false
        if (passwordAgain != password) return false 
        return true
    }

    console.log('REGISTER: ', app.account.username)

    return (
        <View style={styles.container}>
            <Image style={styles.imgBG} source={images.login.loginBG}/>
            <View style={styles.overlayBGView}/>
            <View style={styles.topView}>
                <TouchableOpacity 
                    onPress={() => {
                        dispatch(appResetError())
                        navigation.goBack()
                    }}>
                    <Icon name={'angle-left'} size={48} color={'white'}/>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <EnterBox 
                    title={'First name'}
                    placeholder={'Enter your first name'}
                    value={firstName}
                    error={app.error}
                    style={styles.boxView}
                    changeText={(text) => {
                        dispatch(appResetError())
                        setFirstName(text)
                }}/>
                <EnterBox 
                    title={'Last name'}
                    placeholder={'Enter your last name'}
                    value={lastName}
                    error={app.error}
                    style={styles.boxView}
                    changeText={(text) => {
                        dispatch(appResetError())
                        setLasttName(text)
                }}/>
                <EnterBox 
                    title={'Email'}
                    placeholder={'Enter your email'}
                    value={email}
                    error={app.error}
                    style={styles.boxView}
                    changeText={(text) => {
                        dispatch(appResetError())
                        setEmail(text)
                }}/>
                <EnterBox 
                    title={'Phone number'}
                    placeholder={'Enter your phone number'}
                    value={phoneNumber}
                    error={app.error}
                    style={styles.boxView}
                    changeText={(text) => {
                        dispatch(appResetError())
                        setPhoneNumber(text)
                }}/>
                <EnterBox 
                    title={'Username'}
                    placeholder={'Enter your username'}
                    value={username}
                    error={app.error}
                    style={styles.boxView}
                    changeText={(text) => {
                        dispatch(appResetError())
                        setUsername(text)
                }}/>
                <EnterBox 
                    title={'Password'}
                    placeholder={'Enter your password'}
                    value={password}
                    error={app.error || wrongPassAgain}
                    style={styles.boxView}
                    isPassword={true}
                    changeText={(text) => {
                        dispatch(appResetError())
                        setPassword(text)
                }}/>
                <EnterBox 
                    title={'Password verify'}
                    placeholder={'Enter your password again'}
                    value={passwordAgain}
                    error={app.error || wrongPassAgain}
                    style={styles.boxView}
                    isPassword={true}
                    changeText={(text) => {
                        dispatch(appResetError())
                        setPasswordAgain(text)
                        if (text.length >= password.length && text != password) {
                            setWrongPassAgain(true)
                        } else {
                            setWrongPassAgain(false)
                        }
                }}/>
                {(app.error || wrongPassAgain) && <Text style={styles.txtErrorInfo}>{app.error || 'Password verify is not match!'}</Text>}
                <TouchableOpacity 
                    style={[styles.btn, !verifyInfo() && styles.disableBtn]} 
                    disabled={!verifyInfo()}
                    onPress={() => register()}>
                    <Text style={styles.txtBtn}>Register</Text>
                </TouchableOpacity>
            </View>
            { app.isLoading && <LoadingView />}
            { app.isRegister && <ResultView 
                title={'Register success!'}  
                description={'Thank you for your register. Please press confirm to go to Main app.'}
                onConfirm={() => login()}/>}
        </View>
    )
}

export default Register