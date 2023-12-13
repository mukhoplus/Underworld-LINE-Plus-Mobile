import React, {useState} from 'react';
import {Text} from 'react-native';

const Main = ({userId, setUserId}) => {
  const [userList, setUserList] = useState([]);
  const [roomList, setRoomList] = useState([]);
  const [roomId, setRoomId] = useState(0);
  const [chatList, setChatList] = useState([]);

  return <Text>Main</Text>;
};

export default Main;
