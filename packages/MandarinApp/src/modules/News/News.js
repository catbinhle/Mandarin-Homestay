import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux' 
import { getNewsList } from '../../actions/NewsActions'

const News = ({navigation}) => {
    const dispatch = useDispatch() 
    const newsList = useSelector(state => state.news.newsList) 

    useEffect(() => {
        dispatch(getNewsList())
    }, [])

    const _renderItem = ({item}) => (
        <TouchableOpacity 
            style={styles.item}
            onPress={() => navigation.navigate('NewsDetail', item)}>
            <Image style={styles.imageItem} source={{uri: item.images[0]}}/>
            <View style={styles.contentItem}>
                <Text style={styles.titleTxt}>{item.title}</Text>
                <Text 
                numberOfLines={1} 
                style={styles.descTxt}
                >
                    {item.describe}
                </Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={newsList}
                renderItem={_renderItem}
                keyExtractor={(item, index) => `${item.key}${index}`}
            />
        </View>
    )
}

export default News