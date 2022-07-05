import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    overlayView: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.6,
    }
})

export default Styles