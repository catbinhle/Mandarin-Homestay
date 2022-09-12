import React from "react"
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import PopupView from "../PopupView/PopupView"
import HideView from "../HideView/HideView"
// import { TouchableOpacity } from "react-native"

const DropdownView = ({childView, originTopPopup, onHide, onConfirm}) => {
    return (
        <PopupView childView={
            <View style={styles.container}>
                <HideView onPress={onHide}/>
                <View style={[{ marginTop: originTopPopup + 2 }, styles.contentsPopupView]}>
                    {childView}
                    <TouchableOpacity 
                    style={styles.btn} 
                    onPress={onConfirm}>
                    <Text style={[styles.txtTitleSuccess,{color:"white"}]}>Confirm</Text>
                </TouchableOpacity>
                </View>
            </View>
        }/>
    )
}

export default DropdownView