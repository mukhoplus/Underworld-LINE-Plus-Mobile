import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {MainStyles} from '../MainStyle';

export const Header = ({
  text,
  setRoomId = null,
  setChatList = null,
  isChatting = false,
}) => {
  return (
    <View style={MainStyles.header}>
      {isChatting && (
        <Icon
          name="arrowleft"
          style={MainStyles.headerIcon}
          size={25}
          color="black"
          onPress={() => {
            setRoomId(0);
            setChatList([]);
          }}
        />
      )}
      <Text style={MainStyles.headerText}>{text}</Text>
    </View>
  );
};
