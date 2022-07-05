import React from "react"
import { ActivityIndicator } from 'react-native'
import PopupView from "../PopupView/PopupView"

const LoadingView = () => {

    return (
        <PopupView childView={<ActivityIndicator size="large" />}/>
    )
}

export default LoadingView