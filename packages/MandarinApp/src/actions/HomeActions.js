import {
    HOME_GET_LIST, 
    HOME_GET_LIST_RES_SUCCESS, 
    HOME_GET_LIST_RES_FAIL,
    BOOKING_ROOM,
    BOOKING_ROOM_SUCCESS,
    BOOKING_ROOM_FAIL,
    BOOKING_ROOM_CONFIRM,
    SEARCHING_ROOM,
    SEARCHING_ROOM_SUCCESS,
    SEARCHING_ROOM_FAIL,
    SEARCHING_ROOM_CONFIRM
} from '../defines/ActionTypes'

export const getHomestayList = () => (
    {
        type: HOME_GET_LIST,
    }
)

export const getHomestayListResSuccess = (res) => (
    {
        type: HOME_GET_LIST_RES_SUCCESS,
        payload: res
    }
)

export const getHomestayListResFail = (res) => (
    {
        type: HOME_GET_LIST_RES_FAIL,
        payload: res
    }
)

export const bookingRoom = (res) => (
    {
        type: BOOKING_ROOM,
        payload: res
    }
)

export const bookingRoomSuccess = (res) => (
    {
        type: BOOKING_ROOM_SUCCESS,
        payload: res
    }
)

export const bookingRoomFail = (res) => (
    {
        type: BOOKING_ROOM_FAIL,
        payload: res
    }
)

export const bookingRoomConfirm = () => (
    {
        type: BOOKING_ROOM_CONFIRM,
    }
)

export const searchingRoom = (res) => (
    {
        type: SEARCHING_ROOM,
        payload: res
    }
)

export const searchingRoomSuccess = (res) => (
    {
        type: SEARCHING_ROOM_SUCCESS,
        payload: res
    }
)

export const searchingRoomFail = (res) => (
    {
        type: SEARCHING_ROOM_FAIL,
        payload: res
    }
)
