import React, { useEffect, useState } from "react"
import { View, Text, ScrollView, Image } from 'react-native'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux' 
import { getNewsList } from '../../actions/NewsActions'

const NewsDetail = ({route}) => {
    const dispatch = useDispatch() 
    const newsList = useSelector(state => state.news.newsList) 

    const _renderContent = ({item, desc}) => (
        <View style={styles.content}>
            <Image style={styles.imageContent} source={{uri: item}}/>
            <Text style={styles.descTxt}>{desc}</Text>
        </View>
    )
    const item = route.params
    console.log('NEWS test: ',item)
    return (
        <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            {item.images.map(element => _renderContent({item: element, desc: item.describe}))}
        </ScrollView>
    )
}

export default NewsDetail