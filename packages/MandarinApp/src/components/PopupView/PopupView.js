import React from "react"
import { View } from 'react-native'
import styles from './styles'

const PopupView = ({childView, opacity = 0.6}) => {

    return (
        <View style={styles.container}>
            <View style={[styles.overlayView, {opacity: opacity}]}/>
            {childView}
        </View>
    )
}

export default PopupView