import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { postapi, getapi } from '../servers/API'
import {
    APP_LOGIN, 
    APP_LOGIN_RESPONSE_SUCCESS, 
    APP_LOGIN_RESPONSE_FAIL, 
    HOME_GET_LIST, 
    HOME_GET_LIST_RES_SUCCESS, 
    HOME_GET_LIST_RES_FAIL,
    NEWS_GET_LIST_RES_SUCCESS,
    NEWS_GET_LIST_RES_FAIL,
    NEWS_GET_LIST,
    APP_REGISTER,
    APP_REGISTER_FAIL,
    APP_REGISTER_SUCCESS,
    BOOKING_ROOM_SUCCESS,
    BOOKING_ROOM_FAIL,
    BOOKING_ROOM
} from '../defines/ActionTypes'
import { saveStoreData } from '../utils'

function* appLogin(action) {
    try {
        const response = yield call(
            postapi,
            {
                endPoint: 'users/authenticate', 
                method: 'post', 
                param: {
                    username: action.payload.username,
                    password: action.payload.password
                },
                isLogin: true
            }
        )
        if (response.response?.data?.message) {
            yield put({type: APP_LOGIN_RESPONSE_FAIL, payload: response.response?.data?.message})
        }else {
            yield put({type: APP_LOGIN_RESPONSE_SUCCESS, payload: response})
            saveStoreData('@account', {username: action.payload.username, password: action.payload.password})
        }
    
    } catch (e) {
        console.log(e)
       yield put({type: APP_LOGIN_RESPONSE_FAIL, payload: response.response?.data?.message})
    }
}

function* appRegister(action) {
    try {
        const response = yield call(
            postapi,
            {
                endPoint: 'users/register', 
                method: 'post', 
                param: action.payload,
                isLogin: true
            }
        )
        if (response.statusCode === 1) {
            yield put({type: APP_REGISTER_SUCCESS})
        }else {
            yield put({type: APP_REGISTER_FAIL, payload: response.response?.data?.message})
        }
    
    } catch (e) {
        console.log(e)
       yield put({type: APP_REGISTER_FAIL, payload: response.response?.data?.message})
    }
}

function* getHomeList() {
    try {
        const {app} = yield select()
        const response = yield call(
            getapi,
            {
                endPoint: 'homestay/getHomestay', 
                token: app.userInfo?.token
            }
        )
        yield put({type: HOME_GET_LIST_RES_SUCCESS, payload: response})
    } catch (e) {
        console.log(e)
       yield put({type: HOME_GET_LIST_RES_FAIL, payload: 'Request error!'})
    }
}

function* getNewsList() {
    try {
        const {app} = yield select()
        const response = yield call(
            getapi,
            {
                endPoint: 'news/getNews', 
                token: app.userInfo?.token
            }
        )
        yield put({type: NEWS_GET_LIST_RES_SUCCESS, payload: response})
    } catch (e) {
        console.log(e)
       yield put({type: NEWS_GET_LIST_RES_FAIL, payload: 'Request error!'})
    }
}

function* bookingRoom(action) {
    try {
        const {app} = yield select()
        const response = yield call(
            postapi,
            {
                endPoint: 'homestay/booking', 
                param: action.payload,
                token: app.userInfo?.token
            }
        )
        if (response.statusCode === 1) {
            yield put({type: BOOKING_ROOM_SUCCESS, payload: response})
        }else {
            yield put({type: BOOKING_ROOM_FAIL, payload: response.response?.data?.message})
        }
    } catch (e) {
        console.log(e)
        yield put({type: BOOKING_ROOM_FAIL, payload: response.response?.data?.message})
    }
}

function* appSaga() {
    yield takeEvery(APP_LOGIN, appLogin)
    yield takeEvery(APP_REGISTER, appRegister)
    yield takeEvery(HOME_GET_LIST, getHomeList)
    yield takeEvery(NEWS_GET_LIST, getNewsList)
    yield takeEvery(BOOKING_ROOM, bookingRoom)
}

export default appSaga