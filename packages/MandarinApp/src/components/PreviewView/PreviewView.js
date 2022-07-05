import React from "react"
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import PopupView from "../PopupView/PopupView"
import HideView from "../HideView/HideView"
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont()

const PreviewView = ({item, onHide}) => {
    const previewView = () => (
        <View style={styles.container}>
            {/* <TouchableOpacity 
                style={styles.btn}
                onPress={() => {}}>
                <Icon name={'angle-left'} size={30} color={'white'}/>
            </TouchableOpacity> */}
            <Image style={styles.image} source={{uri: item}}/>
            <HideView onPress={onHide}/>
            {/* <TouchableOpacity 
                style={styles.btn}
                onPress={() => {}}>
                <Icon name={'angle-right'} size={30} color={'white'}/>
            </TouchableOpacity> */}
        </View>
    )

    return (
        <PopupView childView={previewView()} opacity={0.9}/>
    )
}

export default PreviewView