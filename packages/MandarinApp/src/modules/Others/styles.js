import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-between'
    },
    content: {
        flex: 1,
        padding: 16,
    },
    buttonView: {
        flex: 0.1,
        borderColor: '#E6E6FA',
        borderTopWidth: 0.5,
        margin: 16
        // shadowColor: 'black',
        // shadowOffset: {
        //   width: 10,
        //   height: 10
        // },
        // elevation: 10,
        // shadowRadius: 8,
        // shadowOpacity: 0.1,
        // marginVertical: 16
    },
    infoView: {
        flexDirection: 'row',
    },
    titleView: {
        backgroundColor: '#800080',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 4,
        paddingLeft: 8,
        marginBottom: 8,
    },
    logoutBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDA0DD',
        margin: 16,
        borderRadius: 8,
    },
    txtInfo: {
        fontSize: 16,
        fontWeight: '700',
        color: '#595959'
    },
    txtTitle: {
        fontSize: 16,
        fontWeight: '700',
        color:"black"
    },
    txtLogout: {
        fontSize: 18,
        fontWeight: '700',
        color: 'white'
    },
})

export default Styles