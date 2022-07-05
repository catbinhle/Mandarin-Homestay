import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux' 
import { appLogout } from '../../actions/AppActions'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Others = () => {
    const dispatch = useDispatch() 
    const app = useSelector(state => state.app) 
    const logout = () => {
        AsyncStorage.clear()
        dispatch(appLogout())
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleView}>
                    <Text style={styles.txtTitle}>Informations</Text>
                </View>
                <View style={styles.infoView}>
                    <Text style={styles.txtTitle}>Name: </Text>
                    <Text style={styles.txtInfo}>{app.userInfo?.firstName + ' ' + app.userInfo?.lastName}</Text>
                </View>
                <View style={styles.infoView}>
                    <Text style={styles.txtTitle}>Phone: </Text>
                    <Text style={styles.txtInfo}>{app.userInfo?.phoneNumber}</Text>
                </View>
                <View style={[styles.titleView, {marginTop: 8}]}>
                    <Text style={styles.txtTitle}>Your booking</Text>
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity 
                    style={styles.logoutBtn}
                    onPress={() => logout()}>
                    <Text style={styles.txtLogout}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Others