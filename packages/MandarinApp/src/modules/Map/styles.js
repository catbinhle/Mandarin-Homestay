import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    topView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDA0DD',
        padding: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        width: '15%'
    },
})

export default Styles