import React from "react"
import { View } from 'react-native'
import styles from './styles'
import PopupView from "../PopupView/PopupView"
import HideView from "../HideView/HideView"
import Button from "../Button/Button"

const DropdownView = ({childView, originTopPopup, onHide, onConfirm}) => {
    return (
        <PopupView childView={
            <View style={styles.container}>
                <HideView onPress={onHide}/>
                <View style={[{ marginTop: originTopPopup + 2 }, styles.contentsPopupView]}>
                    {childView}
                    <Button onPress={onConfirm} title='Confirm'/> 
                </View>
            </View>
        }/>
    )
}

export default DropdownView