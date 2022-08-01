import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contents: {
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    btn: {
        marginHorizontal: 16,
        marginTop: 8,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b4134b',
        borderRadius: 6,
        height: 44
    },
    txtTitleSuccess: {
        fontSize: 18,
        fontWeight: '900',
    },
    txtDescSuccess: {
        marginVertical: 8,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    }
})

export default Styles