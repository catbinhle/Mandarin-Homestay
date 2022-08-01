import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
        margin:6
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        // width:"100%",
        // shadowColor: 'black',
        borderRadius: 4,
        borderWidth:1.5,
        // shadowOffset: {
        //   width: 10,
        //   height: 10
        // },
        // elevation: 10,
        // shadowRadius: 8,
        // shadowOpacity: 0.1,
        margin: 5,
        // flexWrap: "wrap"
    },
    imageItem: {
        height: "100%", 
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
        marginRight: 10
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