import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux' 
import { getHomestayList } from '../../actions/HomeActions'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, PreviewView } from '../../components'
// import { PushNotify } from '../../utils'

// Icon.loadFont()

const Home = ({navigation}) => {
    const [pagingImage, setPagingImage] = useState(null)
    const dispatch = useDispatch() 
    const homeList = useSelector(state => state.home.homeList) 

    useEffect(() => {
        dispatch(getHomestayList())
        // PushNotify.requestPermission()
        // console.log('Push Notify: ', await PushNotify.getToken())
    }, [])

    const TitleView = ({title, isBooking = false, onPress}) => (
        <View style={styles.titleView}>
            <Text style={styles.txtContentTitle}>{title}</Text>
            {/* {isBooking && 
                <TouchableOpacity 
                    style={[styles.titleView, styles.bookingView]}
                    onPress={onPress}>
                    <Text style={[styles.txtContentTitle, {marginRight: 4}]}>{'Booking'}</Text>
                    <Icon name={'angle-right'} size={30} color={'black'}/>
                </TouchableOpacity>
            } */}
        </View>
    )

    const _renderItem = ({item}) => (
        <TouchableOpacity 
            style={styles.item}
            onPress={() => setPagingImage(item)}>
            <Image style={styles.image} source={{uri: item}}/>
        </TouchableOpacity>
    )
    console.log('HOME LOG: ', homeList)
    const homestayInfo = homeList[0]
    return (
        <View style={styles.container}>
            <View style={styles.headImgView}>
                <Image style={styles.headImg} source={{uri: homestayInfo?.mainImage}}/>
                <View style={styles.headOverlay}/>
                <View style={styles.headContentsView}>
                    <View>
                        <Text style={styles.txtName}>{'Onirique'}</Text>
                        <Text style={styles.txtAddress}>{'1 Dong Khoi, district 1, HCMC'}</Text>
                    </View>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Map')}>
                        <Icon name={'compass'} size={32} color={'white'}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentView}>
                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <TitleView 
                        title={'Homestay'}
                    />
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={homestayInfo?.rooms}
                        renderItem={_renderItem}
                        keyExtractor={(item, index) => `${item.key}${index}`}
                    />
                    <Button
                        title={'Booking'}
                        onPress={() => navigation.navigate('Booking')}
                    />
                    <TitleView 
                        title={'Food and drink'}
                    />
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={homestayInfo?.coffees}
                        renderItem={_renderItem}
                        keyExtractor={(item, index) => `${item.key}${index}`}
                    />
                </ScrollView>
            </View>
            {pagingImage != null && 
                <PreviewView 
                    item={pagingImage} 
                    onHide={() => setPagingImage(null)}
                />
            }
        </View>
    )
}

export default Home