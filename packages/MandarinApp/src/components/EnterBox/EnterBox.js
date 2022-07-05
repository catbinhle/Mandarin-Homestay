import React, { useState } from "react"
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont()

const EnterBox = ({title, placeholder = '', value = '', isPassword = false, error = null, style, changeText}) => {
    const [isEye, setIsEye] = useState(isPassword)
    return (
        <View style={style}>
            <Text style={[styles.title, error && styles.errorTitle]}>{title}</Text>
            <View style={[styles.enterBox, error && styles.errorEnterBox]}>
                <TextInput
                    style={styles.inputText}
                    placeholder={placeholder}
                    secureTextEntry={isEye}
                    value={value}
                    onChangeText={changeText}
                />
                { isPassword && 
                    <TouchableOpacity 
                        onPress={() => setIsEye(!isEye)}>
                        <Icon name={isEye ? 'eye' : 'eye-slash'} size={20} color={'black'}/>
                    </TouchableOpacity>     
                }
            </View>
        </View>
    )
}

export default EnterBox