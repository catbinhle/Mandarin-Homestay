import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    upDownBtnView: {
        flexDirection: 'row',
        margin: 16
    },
    btn: {
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#DDA0DD',
        borderWidth: 1,
        borderRadius: 4
    },
    disableBtn: {
        borderColor: '#d3d3d3',
    },
    txtTitle: {
        fontSize: 18,
        fontWeight: '600',
        margin: 16
    },
    txtBtn: {
        fontSize: 24,
        fontWeight: '600',
        color: '#DDA0DD',
    },
    txtDisableBtn: {
        color: '#d3d3d3'
    }
})

export default Styles