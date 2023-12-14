import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {MainStyles} from '../MainStyle';

export const Header = ({text, isChatting = false}) => {
  return (
    <View style={MainStyles.header}>
      {isChatting && <Icon name="arrowleft" size={25} color="black" />}
      <Text style={MainStyles.headerText}>{text}</Text>
    </View>
  );
};
