import React from "react"
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { PopupView } from ".."

const ResultView = ({title, description, onConfirm}) => {
    const successView = () => (
        <View style={styles.container}>
            <View style={styles.contents}>
                <Text style={styles.txtTitleSuccess}>{title}</Text>
                <Text style={styles.txtDescSuccess}>{description}</Text>
                <TouchableOpacity 
                    style={styles.btn} 
                    onPress={onConfirm}>
                    <Text style={[styles.txtTitleSuccess,{color:"white"}]}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    return (
        <PopupView childView={successView()}/>
    )
}

export default ResultView