import React, { useState } from "react"
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

Icon.loadFont()

const EnterBox = ({name, title, placeholder = '', value = '', isPassword = false, error = null, style, changeText}) => {
    const [isEye, setIsEye] = useState(isPassword)
    return (
        <View style={style}>
            {/* <Text style={[styles.title, error && styles.errorTitle]}>{title}</Text> */}
            <View style={[styles.enterBox, error && styles.errorEnterBox]}>
                <Icon name = {name} size = {20} color = {'grey'}/>
                <TextInput
                    style={styles.inputText}
                    placeholder={placeholder}
                    secureTextEntry={isEye}
                    value={value}
                    onChangeText={changeText}
                    autoCapitalize={'none'}
                />
                { isPassword && 
                    <TouchableOpacity 
                        onPress={() => setIsEye(!isEye)}>
                        <Icon name={isEye ? 'eye-off-outline' : 'eye-outline'} size={20} color={'black'}/>
                    </TouchableOpacity>     
                }
            </View>
        </View>
    )
}

export default EnterBox