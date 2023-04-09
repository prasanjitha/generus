import React from 'react';
import { FlatList, View } from 'react-native';
import WdListItem from '../compnents/WdListItem';
import WdColor from '../config/WdColor';
import WdListItemSeperator from '../compnents/WdListItemSeperator';
import { useState } from 'react';
const messages = [
    {
        id: 1,
        title: 'Supun Priyankara',
        description: 'Hello kamal, how are you?',
        image: 'https://cdn.pixabay.com/photo/2016/08/01/20/15/girl-1562025_960_720.jpg',
    },
    {
        id: 2,
        title: 'Vimesh Bandara',
        description: 'Hi, what\'s happening tommorow morning',
        image: 'https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg',
    },
    {
        id: 3,
        title: 'Sinith Sathsara',
        description: 'D3',
        image: 'https://cdn.pixabay.com/photo/2014/07/31/22/50/photographer-407068_960_720.jpg',
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
                        title: 'Supun Priyankara',
                        description: 'Hello kamal, how are you?',
                        image: 'https://cdn.pixabay.com/photo/2016/08/01/20/15/girl-1562025_960_720.jpg',
                    },
                    {
                        id: 2,
                        title: 'Vimesh Bandara',
                        description: 'Hi, what\'s happening tommorow morning',
                        image: 'https://cdn.pixabay.com/photo/2014/05/26/14/01/beauty-354565_960_720.jpg',
                    },
                ])
            }}
        />
    );
}

export default WdMessageScreen;