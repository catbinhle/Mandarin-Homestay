import {
    NEWS_GET_LIST, 
    NEWS_GET_LIST_RES_SUCCESS, 
    NEWS_GET_LIST_RES_FAIL
} from '../defines/ActionTypes'

export const getNewsList = () => (
    {
        type: NEWS_GET_LIST,
    }
)

export const getNewsListResSuccess = (res) => (
    {
        type: NEWS_GET_LIST_RES_SUCCESS,
        payload: res
    }
)

export const getNewsListResFail = (res) => (
    {
        type: NEWS_GET_LIST_RES_FAIL,
        payload: res
    }
)