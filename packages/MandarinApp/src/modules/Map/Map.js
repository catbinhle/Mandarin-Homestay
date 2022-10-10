import React from 'react';

import { Image, SafeAreaView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';

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
                    latitude: 16.455046636366685,
                    longitude: 107.5515010140097,
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
                        title={'Mandarin Homestay'}
                        description={'06 Ba Nguyen Dinh Chi, Hue city'}
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