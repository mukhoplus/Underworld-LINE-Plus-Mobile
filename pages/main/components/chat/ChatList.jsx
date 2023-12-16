import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {getChatDate, getChatTime} from '../../../../utils/DateTimeUtil';
import {ChatStyles} from './ChatStyle';

const ChatList = ({userId, chatList, chatListRef, dateOutput}) => {
  const isChatDateInDateOutput = date => {
    return dateOutput.hasOwnProperty(getChatDate(date));
  };

  const handleChatDate = date => {
    const chatDate = getChatDate(date);

    dateOutput[chatDate] = true;
    return chatDate;
  };

  return (
    <ScrollView style={ChatStyles.chatList} ref={chatListRef}>
      {chatList.map((chat, index) => (
        <View key={index}>
          {!isChatDateInDateOutput(chat.sendAt) && (
            <View style={ChatStyles.dateLine}>
              <Text style={ChatStyles.chatDate}>
                {handleChatDate(chat.sendAt)}
              </Text>
            </View>
          )}
          <View
            style={
              chat.sendUserId === userId
                ? ChatStyles.myChat
                : ChatStyles.yourChat
            }>
            {chat.sendUserId !== userId && <Avatar />}
            {chat.sendUserId === userId && (
              <Text style={ChatStyles.myNotRead}>
                {chat.notRead !== 0 && chat.notRead}
                {'\n'}
                {getChatTime(chat.sendAt)}
              </Text>
            )}
            <Text
              style={
                chat.sendUserId === userId
                  ? ChatStyles.myText
                  : ChatStyles.yourText
              }>
              {chat.message}
            </Text>
            {chat.sendUserId !== userId && (
              <Text style={ChatStyles.yourNotRead}>
                {chat.notRead !== 0 && chat.notRead}
                {'\n'}
                {getChatTime(chat.sendAt)}
              </Text>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const Avatar = () => {
  return <View style={ChatStyles.avatarContainer} />;
};

export default ChatList;
