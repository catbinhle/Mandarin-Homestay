import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
        margin:6
    },
    item: {
        // flex: 1,
        backgroundColor: "white",
        height:80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: 'black',
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        shadowOffset: {
          width: 5,
          height: 5,
        },
        elevation: 2,
        shadowRadius: 2,
        shadowOpacity: 0.2,
        margin: 5,
    },
    imageItem: {
        height:"100%",
        width: 80,
        resizeMode: 'cover',
        borderRadius: 4,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
    },
    contentItem: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 6,
        marginRight: 10,
        flexShrink:1
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