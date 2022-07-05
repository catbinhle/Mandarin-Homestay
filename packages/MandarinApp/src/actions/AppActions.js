import {
    APP_LOGOUT, 
    APP_LOGIN,
    APP_REGISTER,
    APP_RESET_ERROR
} from '../defines/ActionTypes'

export const appLogin = (param) => (
    {
        type: APP_LOGIN,
        payload: param
    }
)

export const appRegister = (param) => (
    {
        type: APP_REGISTER,
        payload: param
    }
)

export const appLogout = () => (
    {
        type: APP_LOGOUT,
    }
)

export const appResetError = () => (
    {
        type: APP_RESET_ERROR,
    }
)
