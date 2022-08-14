import React, { useEffect, useState } from "react"
import { View, Text } from 'react-native'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { appLogout } from '../../actions/AppActions'
import { Utils } from '../../utils'
import {
    Button,
} from '../../components'
import moment from 'moment'

const Others = () => {
    const dispatch = useDispatch()
    const app = useSelector(state => state.app)
    const logout = () => {
        Utils.clearAllData()
        dispatch(appLogout())
    }
    const BookingView = () => (
        <View>
            <View style={[styles.titleView, { marginTop: 8 }]}>
                <Text style={[styles.txtTitle, {color:"white"}]}>Your booking</Text>
            </View>
            <View style={styles.infoView}>
                <Text style={styles.txtTitle}>Date: </Text>
                <Text style={styles.txtInfo}>{`${moment(app?.userInfo?.booking?.dates[0]).format('ddd DD MMM')} - ${moment(app?.booking?.dates[app?.booking?.dates.length - 1]).format('ddd DD MMM')}`}</Text>
            </View>
            <View style={styles.infoView}>
                <Text style={styles.txtTitle}>Room: </Text>
                <Text style={styles.txtInfo}>{`${app.userInfo?.booking?.rooms}`}</Text>
            </View>
            <View style={styles.infoView}>
                <Text style={styles.txtTitle}>People: </Text>
                <Text style={styles.txtInfo}>{`${app.userInfo?.booking?.people}`}</Text>
            </View>
        </View>
    )
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleView}>
                    <Text style={[styles.txtTitle, {color:"white"}]}>Informations</Text>
                </View>
                <View style={styles.infoView}>
                    <Text style={styles.txtTitle}>Name: </Text>
                    <Text style={styles.txtInfo}>{app.userInfo?.firstName + ' ' + app.userInfo?.lastName}</Text>
                </View>
                <View style={styles.infoView}>
                    <Text style={styles.txtTitle}>Phone: </Text>
                    <Text style={styles.txtInfo}>{'(+84) ' + app.userInfo?.phoneNumber}</Text>
                </View>
                {app.userInfo?.booking?.dates?.length > 0 && <BookingView />}
            </View>
            <View style={styles.buttonView}>
                <Button
                    onPress={() => logout()}
                    title='Logout' />
            </View>
        </View>
    )
}

export default Others