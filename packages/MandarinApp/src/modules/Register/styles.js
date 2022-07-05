import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    topView: {
        flex: 0.2, 
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 16
    },
    imgBG: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    overlayBGView: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.4
    },
    boxView: {
        marginHorizontal: 16 
    },
    btn: {
        marginHorizontal: 16,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDA0DD',
        borderRadius: 6,
        height: 44
    },
    disableBtn: {
        opacity: 0.4
    },
    txtErrorInfo: {
        color: 'red',
        fontSize: 14,
        marginHorizontal: 16
    },
    txtBtn: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
})

export default Styles