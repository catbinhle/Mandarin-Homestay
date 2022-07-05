import React, {useState, useEffect} from "react"
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const RoomSelectItem = ({title, initNumber = 0, limitNumber = 0, onChange}) => {
    const [number, setNumber] = useState(initNumber)
    useEffect(() => {
        onChange(number)
    }, [number])
    const Button = ({title, disabled = false, onPress}) => (
        <TouchableOpacity 
            style={[styles.btn, disabled && styles.disableBtn]}
            disabled={disabled}
            onPress={onPress}>
            <Text style={[styles.txtBtn, disabled && styles.txtDisableBtn]}>{title}</Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>{title}</Text>
            <View style={styles.upDownBtnView}>
                <Button 
                    title={'+'}
                    onPress={() => setNumber(number + 1)}
                />
                <Text style={styles.txtTitle}>{number}</Text>
                <Button 
                    title={'-'}
                    disabled={number<=limitNumber}
                    onPress={() => setNumber(number - 1)}
                />
            </View>
        </View>
    )
}

export default RoomSelectItem