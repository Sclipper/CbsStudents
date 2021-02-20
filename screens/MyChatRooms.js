import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ChatList from './../components/ChatList';
import { CHATROOM_PRVT } from './../data/dummy-data';

const CBSChatRooms = () => {
   return (
      <View style={styles.room}>
         <FlatList
            data={CHATROOM_PRVT}
            renderItem={itemData => (
               <ChatList chatroom={itemData.item}></ChatList>
            )}
            keyExtractor={item => item.id}
         />

      </View>
   );
}

const styles = StyleSheet.create({

});

export default CBSChatRooms;