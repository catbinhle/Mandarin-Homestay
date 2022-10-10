import React, { useEffect, useState } from 'react';

import moment from 'moment';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

import { bookingRoomConfirm, searchingRoom } from '../../actions/HomeActions';
import {
  Button, DropdownItem, DropdownView, LoadingView, PreviewView, ResultView,
  RoomSelectItem,
} from '../../components';
import styles from './styles';

// import { PushNotify } from '../../utils'
// import {
//     notifications,
//     messages,
//     NotificationMessage,
//     Android
// } from "react-native-firebase-push-notifications"

Icon.loadFont()
var originBottomCalendar = 0
var originBottomPeople = 0
const initCalendar = {
    markedDates: {},
    isStartDatePicked: false,
    isEndDatePicked: false,
    startDate: ''
}
const initRoomInfo = {
    room: 1,
    adult: 2,
    children: 0
}

const Booking = () => {
    const [originTopPopup, setOriginTopPopup] = useState(0)
    const [calendar, setCalendar] = useState(initCalendar)
    const [roomInfo, setRoomInfo] = useState(initRoomInfo)
    const [pagingImage, setPagingImage] = useState(null)
    const dispatch = useDispatch()
    const home = useSelector(state => state.home)
    const app = useSelector(state => state.app) 
    const bookingInfo = home.bookingInfo
    const homestayInfo = home.homeList[0]

    useEffect(() => {
        // PushNotify.onNotificationListener()
        // PushNotify.onNotificationOpenedListener()
        // PushNotify.getInitialNotification()
        searchingRooms({
            id: homestayInfo?.id, 
            dates: [moment().format('YYYY-MM-DD')], 
            rooms: 1
        })
    }, [])

    const searchingRooms = (params) => {
        console.log('****', params)
        dispatch(searchingRoom(params))
    }

    const onDayPress = (day) => {
        if (calendar.isStartDatePicked == false) {
            let markedDates = {}
            markedDates[day?.dateString] = {
                startingDay: true,
                color: '#864646',
                textColor: '#FFFFFF'
            }
            setCalendar({
                markedDates: markedDates,
                isStartDatePicked: true,
                isEndDatePicked: false,
                startDate: day?.dateString,
            })
        } else if (calendar.isEndDatePicked == false) {
            let markedDates = calendar.markedDates
            let startDate = moment(calendar.startDate)
            let endDate = moment(day?.dateString)
            let range = endDate.diff(startDate, 'days')
            if (range > 0) {
                for (let i = 1; i <= range; i++) {
                    let tempDate = startDate.add(1, 'day');
                    tempDate = moment(tempDate).format('YYYY-MM-DD')
                    if (i < range) {
                        markedDates[tempDate] = {
                            color: '#b97979',
                            textColor: '#FFFFFF'
                        }
                    } else {
                        markedDates[tempDate] = {
                            endingDay: true,
                            color: '#864646',
                            textColor: '#FFFFFF'
                        }
                    }
                }
                setCalendar({
                    markedDates: markedDates,
                    isStartDatePicked: true,
                    isEndDatePicked: true,
                    startDate: day?.dateString,
                })
            }
        } else {
            setCalendar(initCalendar)
        }
    }

    const openCalendar = () => (
        <Calendar
            style={{
                borderRadius: 8
            }}
            minDate={Date()}
            markingType={'period'}
            onDayPress={onDayPress}
            markedDates={calendar.markedDates}
        />
    )

    const openRoomSelection = () => (
        <View style={styles.selectRoomView}>
            <RoomSelectItem title={'Adult'} initNumber={roomInfo.adult} limitNumber={1}
                onChange={(number) => {
                    setRoomInfo({ ...roomInfo, ...{ adult: number } })
                }}
            />
            <RoomSelectItem title={'Children'}
                onChange={(number) => {
                    setRoomInfo({ ...roomInfo, ...{ children: number } })
                }}
            />
            <RoomSelectItem title={'Room'} initNumber={roomInfo.room} limitNumber={1}
                onChange={(number) => {
                    setRoomInfo({ ...roomInfo, ...{ room: number } })
                }}
            />
        </View>
    )

    const _renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {setPagingImage(item?.image)}}>
            <Image style={styles.image} source={{ uri: item?.image }} />
            <View style = {{flexDirection:"column",paddingLeft: 12, paddingVertical: 12, flexGrow:1, justifyContent:"space-between"}}>
                <View style ={{flex: 1}}>
                    <Text style = {{fontSize: 18, fontWeight: "bold"}}>{item?.type}</Text>

                    <View style = {{flexDirection: "row"}}>
                        <Icon name={'users'} size={20} color={'grey'} style = {{marginTop: 4}}> </Icon> 
                        <Text style = {{fontSize: 14, marginTop: 4, marginLeft: 1}}>{`${item?.type === 'Superior Double' ? 2 : 4} Adult (s)`}</Text> 
                    </View>

                    <View style = {{flexDirection: "row"}}>
                        <Icon name={"bed"} size={20} color={'grey'} style = {{marginTop: 4}}> </Icon> 
                        <Text style = {{fontSize: 14, marginTop: 4}}>{`${item?.type === 'Superior Double' ? 1 : 2} double bed`}</Text> 
                    </View>

                    <View style = {{flexDirection: "row"}}>
                        <Icon name={"spoon"} size={20} color={'grey'} style = {{marginTop: 4, marginLeft: 6}}> </Icon> 
                        <Text style = {{fontSize: 14, marginTop: 4, marginLeft: 8}}>Breakfast NOT included</Text> 
                    </View>
                    <Text style = {{fontSize: 14, marginTop: 4, marginLeft: 8, color: 'red', fontWeight: 'bold'}}>{`Only ${item?.number} ${item?.number > 1 ? `rooms` : `room`} left`}</Text> 
                    
                </View>
                <View style = {{alignItems:"flex-end", marginHorizontal: 8}}>
                    <Text style={styles.txtPrice}>{`${item?.price}.000 VND \n`} <Text style = {{color: "#a3a3a3"}}> 1 room, 1 night</Text></Text>
                    <TouchableOpacity 
                    onPress={() => {}}
                    style={{  
                        height: 40,
                        backgroundColor: '#864646',
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 8,
                        width:100,
                        alignSelf: "flex-end"
                        }}
                    >
                        <Text style = {{color: "white", fontWeight:"bold"}}>Choose</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.headImg} source={{ uri: homestayInfo?.mainImage }} />
                <View style={styles.headOverlay} />
                <View style={styles.headContentView}>
                    <DropdownItem
                        icon={'calendar'}
                        title={`${moment(Object.keys(calendar.markedDates)[0]).format('ddd DD MMM')} - ${moment(Object.keys(calendar.markedDates)[Object.keys(calendar.markedDates).length - 1]).format('ddd DD MMM')}`}
                        onPress={() => setOriginTopPopup(originBottomCalendar)}
                        onLayout={event => {
                            const layout = event.nativeEvent.layout
                            originBottomCalendar = layout.height + layout.y
                        }}
                    />
                    <DropdownItem
                        style={{ marginTop: 16 }}
                        icon={'user'}
                        title={`${roomInfo.room} room(s) - ${roomInfo.adult} adult(s) - ${roomInfo.children} children `}
                        onPress={() => setOriginTopPopup(originBottomPeople)}
                        onLayout={event => {
                            const layout = event.nativeEvent.layout
                            originBottomPeople = layout.height + layout.y
                        }}
                    />
                    <Button 
                        onPress={() => searchingRooms({
                            id: homestayInfo?.id, 
                            dates: Object.keys(calendar.markedDates), 
                            rooms: roomInfo.room
                        })} 
                        title='Search' />
                </View>
            </View>
            {bookingInfo?.searching?.length > 0 ?
                <View style={styles.contentView}>
                    <Text style={styles.txtTitle}>{`Available rooms on ${moment(Object.keys(calendar.markedDates)[0]).format('ddd DD MMM')}:`}</Text>
                    <FlatList
                        style={{ flex: 1 }}
                        numColumns={1}
                        showsVerticalScrollIndicator={false}
                        data={bookingInfo?.searching}
                        renderItem={_renderItem}
                        keyExtractor={(item, index) => `${item.key}${index}`}
                    />
                    <View style={{marginHorizontal:8}}>
                        <Button 
                            onPress={() =>{
                                dispatch(bookingRoom({ 
                                    id: app?.userInfo?.id, 
                                    dates: Object.keys(calendar.markedDates),
                                    people: roomInfo.adult + roomInfo.children,
                                    rooms: bookingInfo?.searching?.filter((room, index) => roomInfo.room > index )
                                }))
                            }} 
                        title='Booking' />
                    </View>
                </View>
                :
                <View style={styles.contentView}>
                    <Text style={styles.txtTitle}>{`Sorry, this time is not room available. \nPlease select other date, thanks you!`}</Text>
                </View>
            }
            {originTopPopup > 0 &&
                <DropdownView
                    childView={originTopPopup === originBottomCalendar ? openCalendar() : openRoomSelection()}
                    originTopPopup={originTopPopup}
                    onHide={() => setOriginTopPopup(0)}
                    onConfirm={() => setOriginTopPopup(0)}
                />
            }
            {bookingInfo?.isBooking && <LoadingView />}
            {bookingInfo?.result > 0 && <ResultView
                title={bookingInfo?.result == 1 ? 'Booking success!' : 'Booking fail!'}
                description={bookingInfo?.result == 1 ? 'Thank you for your booking.' : 'Please check your information again.'}
                onConfirm={() => {
                    dispatch(bookingRoomConfirm())
                    // await notifications.displayNotification(
                    //     new NotificationMessage()
                    //         .setNotificationId("notification-id")
                    //         .setTitle("Madarin Homestay")
                    //         .setBody("Booking success!")
                    //         .setData({
                    //             key1: "key1",
                    //             key2: "key2"
                    //         })
                    // )
                }} />}
            {pagingImage != null && 
                <PreviewView 
                    item={pagingImage} 
                    onHide={() => setPagingImage(null)}
                />
            }    
        </View>
    )
}

export default Booking