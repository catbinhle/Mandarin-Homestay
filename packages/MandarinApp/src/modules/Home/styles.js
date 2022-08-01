import { StyleSheet, Dimensions } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    headImgView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentView: {
        flex: 3,
        padding: 6,
    },
    headImg: {
        height: '100%',
        width: '100%',
        resizeMode:'cover',
        marginBottom: 6, 
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
    headContentsView: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 16
    },
    item: {
        justifyContent: 'flex-end',
        width: 180,
        height: 240,
        // shadowColor: 'black',
        borderRadius: 8,
        // shadowOffset: {
        //   width: 10,
        //   height: 10
        // },
        // elevation: 10,
        // shadowRadius: 8,
        // shadowOpacity: 0.1,
        margin: 5,
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 6,
    },
    bookingView: {
        paddingVertical: 0,
    },
    // infoView: {
    //     position: 'absolute',
    //     width: '100%',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: 32,
    //     borderBottomLeftRadius: 6,
    //     borderBottomRightRadius: 6
    // },
    // opacityInfoView: {
    //     position: 'absolute',
    //     width: '100%',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: 32,
    //     borderBottomLeftRadius: 6,
    //     borderBottomRightRadius: 6,
    //     backgroundColor: 'black',
    //     opacity: 0.8
    // },
    // emptyView: {
    //     margin: 16,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    image: {
        height: '100%', 
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 8
    },
    txtName: {
        fontSize: 44,
        fontWeight: '700',
        color: 'white'
    },
    txtAddress: {
        fontSize: 14,
        fontWeight: '700',
        color: 'white'
    },
    txtContentTitle: {
        fontSize: 16,
        fontWeight: '800',
        color:"black"
    }
})

export default Styles