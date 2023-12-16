import React, {useState, useEffect, useRef} from 'react';
import {ScrollView, Keyboard} from 'react-native';
import {Header} from './Header';
import ChatList from './chat/ChatList';
import ChatInput from './chat/ChatInput';
import SocketService from '../../../service/SocketService';
import {axiosRequest} from '../../../service/AxiosService';
import {isInNotReadMessages} from '../../../utils/MessageUtil';
import {LongStringUtil} from '../../../utils/LongStringUtil';
import {ChatStyles} from './chat/ChatStyle';

const ChatComponent = ({
  userId,
  roomList,
  setRoomList,
  roomId,
  setRoomId,
  chatList,
  setChatList,
}) => {
  const [inputMessage, setInputMessage] = useState('');
  const screenRef = useRef(null);
  const chatListRef = useRef(null);
  let dateOutput = {};

  const handleChatList = async () => {
    if (roomId === 0) {
      return;
    }

    await axiosRequest('get', `/chat/${roomId}`)
      .then(response => {
        const newChatList = response.data;

        if (isInNotReadMessages(userId, newChatList)) {
          SocketService.read(roomId, userId);
          return;
        }

        setChatList(newChatList);
      })
      .catch(() => {});
  };

  const getRoomNameByRoomId = (iRoomList, iRoomId) => {
    const getRoomNameInRoomList = (inRoomList, inRoomId) => {
      return inRoomList.find(room => room.roomId === inRoomId);
    };

    if (iRoomId === 0) {
      return '';
    }
    const data = getRoomNameInRoomList(iRoomList, iRoomId);

    if (!data) {
      const newData = axiosRequest('get', `/room/list/${userId}`).then(
        response => {
          setRoomList(response.data);
          return getRoomNameInRoomList(response.data, iRoomId);
        },
      );

      return newData.roomName || '';
    }

    return data.roomName;
  };

  useEffect(() => {
    setInputMessage('');
    dateOutput = {}; // eslint-disable-line react-hooks/exhaustive-deps
    handleChatList();

    if (chatListRef.current) {
      chatListRef.current.scrollToEnd({animated: false});
    }
  }, [roomId]);

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollToEnd({animated: false});
    }
  }, [chatList]);

  const [keyboardStyle, setKeyboardStyle] = useState(false);

  Keyboard.addListener('keyboardDidShow', () => {
    setKeyboardStyle(true);
  });

  Keyboard.addListener('keyboardDidHide', () => {
    setKeyboardStyle(false);
  });

  useEffect(() => {
    screenRef.current.scrollToEnd({animated: false});
  }, [keyboardStyle]);

  return (
    <>
      <Header
        text={LongStringUtil(getRoomNameByRoomId(roomList, roomId), 20)}
        setRoomId={setRoomId}
        setChatList={setChatList}
        isChatting={true}
      />
      <ScrollView
        style={keyboardStyle ? ChatStyles.keyboardOn : ChatStyles.keyboardOff}
        ref={screenRef}
        showsVerticalScrollIndicator={false}>
        <ChatList
          userId={userId}
          chatList={chatList}
          roomId={roomId}
          setRoomId={setRoomId}
          roomList={roomList}
          setRoomList={setRoomList}
          setChatList={setChatList}
          chatListRef={chatListRef}
          dateOutput={dateOutput}
        />
        <ChatInput
          userId={userId}
          roomId={roomId}
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
        />
      </ScrollView>
    </>
  );
};

export default ChatComponent;
