import React from "react"
import { TouchableOpacity } from 'react-native'
import styles from './styles'

const HideView = ({onPress}) => {

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={onPress}>
        </TouchableOpacity>
    )
}

export default HideView