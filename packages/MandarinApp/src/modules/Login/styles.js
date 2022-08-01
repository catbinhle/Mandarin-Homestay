import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    infoView: {
        flex: 0.8,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    boxView: {
        marginHorizontal: 16 
    },
    btn: {
        marginHorizontal: 16,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b4134b',
        borderRadius: 6,
        height: 44
    },
    disableBtn: {
        opacity: 0.4
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
    registerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    txtBtn: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    titleTxt: {
        fontSize: 54,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    txtErrorInfo: {
        color: 'red',
        fontSize: 14,
        marginHorizontal: 16
    },
    txtAccount: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    }
})

export default Styles