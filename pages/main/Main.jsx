import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import SocketService from '../../service/SocketService';
import InfoComponent from './components/InfoComponent';
import ChatComponent from './components/ChatComponent';
import {BaseURL} from '../../service/HostingService';

const getAllNotReadCount = roomList => {
  return roomList.reduce((acc, cur) => {
    return acc + cur.notReadCount;
  }, 0);
};

const Main = ({userId, setUserId}) => {
  const [userList, setUserList] = useState([]);
  const [roomList, setRoomList] = useState([]);
  const [roomId, setRoomId] = useState(0);
  const [chatList, setChatList] = useState([]);
  const [allNotReadCount, setAllNotReadCount] = useState(0);

  useEffect(() => {
    SocketService.connect(
      `ws://${BaseURL}/api/v1/socket`,
      userId,
      setRoomList,
      setChatList,
    );
  }, [userId]);

  useEffect(() => {
    SocketService.getRoomId(roomId);
  }, [roomId]);

  useEffect(() => {
    setAllNotReadCount(getAllNotReadCount(roomList));
  }, [roomList, chatList]);

  return (
    <>
      {roomId === 0 ? (
        <InfoComponent
          userId={userId}
          setUserId={setUserId}
          userList={userList}
          setUserList={setUserList}
          roomList={roomList}
          setRoomList={setRoomList}
          setRoomId={setRoomId}
          setChatList={setChatList}
          allNotReadCount={allNotReadCount}
        />
      ) : (
        <ChatComponent
          userId={userId}
          roomList={roomList}
          setRoomList={setRoomList}
          roomId={roomId}
          setRoomId={setRoomId}
          chatList={chatList}
          setChatList={setChatList}
        />
      )}
    </>
  );
};

export default Main;
