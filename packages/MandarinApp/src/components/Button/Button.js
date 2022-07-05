import React from "react"
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

const Button = ({title, onPress}) => {

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={onPress}>
            <Text style={[styles.txtTitle, {color: 'white'}]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button