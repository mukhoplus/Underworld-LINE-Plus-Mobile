import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import SocketService from '../../../../service/SocketService';
import {ChatStyles} from './ChatStyle';

const ChatInput = ({userId, roomId, inputMessage, setInputMessage}) => {
  const sendMessageValidation = () => {
    return !/^\s*$/.test(inputMessage);
  };

  const handleSendMessage = () => {
    if (sendMessageValidation()) {
      const trimMessage = inputMessage.trim();

      SocketService.send(roomId, userId, trimMessage);
      setInputMessage('');
    }
  };

  return (
    <View style={ChatStyles.submit}>
      <TextInput
        style={ChatStyles.input}
        placeholder=""
        value={inputMessage}
        onChangeText={text => setInputMessage(text)}
        multiline={true}
        numberOfLines={1}
      />
      <TouchableOpacity
        style={
          sendMessageValidation() ? ChatStyles.btn : ChatStyles.btnDisabled
        }
        onPress={handleSendMessage}
        disabled={!sendMessageValidation()}>
        <Text
          style={
            sendMessageValidation()
              ? ChatStyles.btnText
              : ChatStyles.btnTextDisabled
          }>
          전송
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;
