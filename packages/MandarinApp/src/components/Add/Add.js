import React, { useState } from "react"
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont()

const Add = ({ title, value = '', style, changeText}) => {
    return (
        <View style={style}>
            <View style={[styles.enterBox]}>
                <Text style={styles.title}>{title}</Text>
                <TextInput
                    style={styles.inputText}
                    value={value}
                    onChangeText={changeText}
                />
                    <TouchableOpacity 
                        onPress={() => {}}>
                        <Icon name={'plus'} size={20} color={'blue'}/>
                    </TouchableOpacity>     
            </View>
        </View>
    )
}

export default Add