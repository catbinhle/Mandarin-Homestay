import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor:"white"
    },
    contentView: {
        flex: 1,
        padding: 8,
    },
    headImg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        marginBottom: 6
    },
    headOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.4
    },
    headContentView: {
        padding: 16,
    },
    item: {
        // justifyContent: 'flex-end',
        flexDirection:"row",
        height: 250,
        margin: 5,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "black",
    },
    image: {
        resizeMode: 'cover',
        borderRadius: 6,
        height: "100%", 
        width: "35%",
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
    },
    selectRoomView: {
        flex: 1,
        justifyContent: 'center',
    },
    txtTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    txtPrice:{
        fontSize: 14,
        fontWeight: '500',
        color: "#f05900",
    },
})

export default Styles