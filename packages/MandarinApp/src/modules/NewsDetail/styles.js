import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    content: {
        // marginVertical: 16
    },
    imageContent: {
        width: '100%',
        height: "70%",
        resizeMode: 'cover'
    },
    descTxt: {
        fontSize: 16,
        fontWeight: '400',
        margin: 16,
        textAlign:"justify",
        marginBottom:20
    }
})

export default Styles