import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        shadowColor: 'black',
        borderRadius: 8,
        shadowOffset: {
          width: 10,
          height: 10
        },
        elevation: 10,
        shadowRadius: 8,
        shadowOpacity: 0.1,
        margin: 5,
    },
    imageItem: {
        height: 80, 
        width: 80,
        resizeMode: 'cover',
        borderRadius: 8
    },
    contentItem: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 8
    },
    titleTxt: {
        fontSize: 18,
        fontWeight: '700',
    },
    descTxt: {
        fontSize: 14,
        fontWeight: '300',
    }
})

export default Styles