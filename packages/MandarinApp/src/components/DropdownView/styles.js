import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    contentsPopupView: {
        marginHorizontal: 16,
        backgroundColor: 'white',
        height: '50%',
        borderRadius: 8
    },
    btn: {
        // marginHorizontal: 16,
        marginTop: 8,
        paddingVertical: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#864646',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        height: 48
    },
    txtTitleSuccess: {
        fontSize: 16,
        fontWeight: '900',
    },
})

export default Styles