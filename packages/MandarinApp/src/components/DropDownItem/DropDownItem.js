import React from "react"
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont()
const DropdownItem = ({style, icon, title, onLayout, onPress}) => {
    return (
        <TouchableOpacity 
            style={[styles.container, style]}
            onPress={onPress}
            onLayout={onLayout}
        >
            <Icon name={icon} size={30} color={'black'}/>
            <Text style={styles.txtTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default DropdownItem