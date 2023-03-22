import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

import Screen from './Screen';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        uri: 'https://gamingcentral.in/wp-content/uploads/2017/01/mobile-games-with-good-story.jpg'
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        uri: 'https://gamingcentral.in/wp-content/uploads/2017/01/mobile-games-with-good-story.jpg'
    },
]
function MessageScreen(props) {
    const [message, setMessage] = useState(messages);
    const [refreshing, setRefreshing] = useState(false);
    return (
        <Screen>
            <FlatList
                data={message}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        uri={item.uri} />}
                ItemSeparatorComponent={
                    <ListItemSeparator />}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessage([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            uri: 'https://gamingcentral.in/wp-content/uploads/2017/01/mobile-games-with-good-story.jpg'
                        },
                    ],)
                }}
            />
            <Icon name='email' />
        </Screen>
    );
}

export default MessageScreen;