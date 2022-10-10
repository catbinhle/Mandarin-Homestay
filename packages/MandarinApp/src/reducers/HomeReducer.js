import {
  BOOKING_ROOM, BOOKING_ROOM_CONFIRM, BOOKING_ROOM_FAIL, BOOKING_ROOM_SUCCESS,
  HOME_GET_LIST_RES_SUCCESS, SEARCHING_ROOM, SEARCHING_ROOM_FAIL,
  SEARCHING_ROOM_SUCCESS,
} from '../defines/ActionTypes';

const initialState = {
    homeList: [],
    bookingInfo: {
        isBooking: false,
        result: 0,
        searching: []
    }
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_GET_LIST_RES_SUCCESS:
            return { ...state, homeList: action.payload }
        case BOOKING_ROOM: 
            return {...state, bookingInfo: {isBooking: true}}
        case BOOKING_ROOM_SUCCESS: 
            return {...state, bookingInfo: {isBooking: false, result: 1}}
        case BOOKING_ROOM_FAIL: 
            return {...state, bookingInfo: {isBooking: false, result:2}}
        case BOOKING_ROOM_CONFIRM: 
            return {...state, bookingInfo: {isBooking: false, result:0}}
        case SEARCHING_ROOM: 
            return {...state, bookingInfo: {isBooking: true}}
        case SEARCHING_ROOM_SUCCESS:
            return {...state, bookingInfo: {isBooking: false, searching: action.payload?.filter(item => item?.number > 0)}} 
        case SEARCHING_ROOM_FAIL:
            return {...state, bookingInfo: {isBooking: false, searching: action.payload}} 
        default:
          return state
      }
}
  
export default homeReducer