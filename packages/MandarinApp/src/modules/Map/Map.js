import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux' 
import Icon from 'react-native-vector-icons/FontAwesome'
import MapView, {Marker} from 'react-native-maps'

Icon.loadFont()

const Map = ({navigation}) => {
    const dispatch = useDispatch() 
    const homeList = useSelector(state => state.home.homeList) 
    return (
        <SafeAreaView style={styles.container}>
            <MapView 
                style={styles.map}
                // provider={'google'}
                region={{
                    latitude: 10.773119,
                    longitude: 106.706276,
                    latitudeDelta: 0.025,
                    longitudeDelta: 0.025,
                  }}
                zoomEnabled={true}
                showsUserLocation={true}
                followUserLocation={true}
            >
                    <Marker
                        // key={index}
                        coordinate={{ latitude : 10.773119 , longitude : 106.706276 }}
                        title={'Onirique Homestay'}
                        description={'1 Đồng Khởi, phường Bến Nghé, quận 1, Tp.Hồ Chí Minh'}
                       // image={{uri: 'https://icon-library.com/images/google-map-pin-icon-png/google-map-pin-icon-png-0.jpg'}}
                    >
                        <Image style={{width: 40, height: 40, resizeMode: 'cover'}} source={{uri: 'https://icon-library.com/images/google-map-pin-icon-png/google-map-pin-icon-png-0.jpg'}}/>
                    </Marker>
            </MapView>
            <TouchableOpacity 
                style={styles.topView}
                onPress={() => {
                    navigation.goBack()
                }}>
                <Icon name={'angle-left'} size={48} color={'white'}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Map