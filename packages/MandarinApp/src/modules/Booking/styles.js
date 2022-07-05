import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    contentView: {
        flex: 1,
        padding: 16,
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
        justifyContent: 'flex-end',
        width: 180,
        height: 240,
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
    image: {
        height: '100%', 
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 8
    },
    selectRoomView: {
        flex: 1,
        justifyContent: 'center',
    },
    txtTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
})

export default Styles