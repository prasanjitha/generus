import React from 'react';
import { FlatList, View } from 'react-native';
import WdListItem from '../compnents/WdListItem';
import WdColor from '../config/WdColor';
import WdListItemSeperator from '../compnents/WdListItemSeperator';
import { useState } from 'react';
const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: 'https://cdn.pixabay.com/photo/2014/05/26/14/01/beauty-354565_960_720.jpg',
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: 'https://cdn.pixabay.com/photo/2014/05/26/14/01/beauty-354565_960_720.jpg',
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: 'https://cdn.pixabay.com/photo/2014/05/26/14/01/beauty-354565_960_720.jpg',
    },
]
function WdMessageScreen(props) {
    const [message, setMessage] = useState(messages);
    const [refreshing, setRefreshing] = useState(false);
    return (
        <FlatList
            data={message}
            keyExtractor={messages => messages.id.toString()}
            renderItem={({ item }) => <WdListItem
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => console.log('message selected', item.description)}
            />}
            ItemSeparatorComponent={<WdListItemSeperator />}
            refreshing={refreshing}
            onRefresh={() => {
                setMessage([
                    {
                        id: 1,
                        title: 'T1',
                        description: 'D1',
                        image: 'https://cdn.pixabay.com/photo/2014/05/26/14/01/beauty-354565_960_720.jpg',
                    },
                    {
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: 'https://cdn.pixabay.com/photo/2014/05/26/14/01/beauty-354565_960_720.jpg',
                    },
                ])
            }}
        />
    );
}

export default WdMessageScreen;