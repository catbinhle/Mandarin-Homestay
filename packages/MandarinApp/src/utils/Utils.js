import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveStoreData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      // saving error
    }
}

export const getStoreData = async (key) => {
    try {
        const stringValue = await AsyncStorage.getItem(key)
        if (stringValue != '') {
            return stringValue
        }
        return null
    } catch(e) {
      // error reading value
    }
}

export const clearAllData = async () => {
    AsyncStorage.clear()
}