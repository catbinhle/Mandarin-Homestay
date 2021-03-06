import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    errorTitle: {
        color: 'red'
    },
    enterBox: {
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 6,
        marginVertical: 8,
        height: 44,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    errorEnterBox: {
        borderColor: 'red',
    },
    inputText: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 6
    },
})

export default Styles