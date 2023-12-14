import {isInNotReadMessages} from '../utils/MessageUtil';

const SocketService = {
  socket: null,
  selectedRoomId: 0,

  connect: (url, userId, setRoomList, setChatList) => {
    SocketService.socket = new WebSocket(url);

    SocketService.socket.onopen = () => {};

    SocketService.socket.onmessage = event => {
      const roomId = SocketService.selectedRoomId;

      const data = JSON.parse(event.data);
      const {roomList, chatResponseDto} = data;
      const {roomId: responseRoomId, chatList} = chatResponseDto;

      setRoomList(roomList);

      if (roomId === 0) return;
      if (roomId !== responseRoomId) return;

      if (isInNotReadMessages(userId, chatList)) {
        SocketService.read(roomId, userId);
        return;
      }

      setChatList(chatList);
    };

    SocketService.socket.onclose = () => {};
  },

  send: (roomId, sendUserId, message) => {
    if (/^\s*$/.test(message)) return;

    const sendChatDto = {
      roomId,
      sendUserId,
      message,
    };

    const socketSendDto = {
      type: 'chat',
      data: sendChatDto,
    };

    try {
      SocketService.socket.send(JSON.stringify(socketSendDto));
    } catch (error) {}
  },

  read: (roomId, readUserId) => {
    const sendChatDto = {
      roomId,
      sendUserId: readUserId,
      message: '',
    };

    const socketSendDto = {
      type: 'read',
      data: sendChatDto,
    };

    try {
      SocketService.socket.send(JSON.stringify(socketSendDto));
    } catch (error) {}
  },

  close: () => {
    SocketService.socket.close();
  },

  getRoomId: roomId => {
    SocketService.selectedRoomId = roomId;
  },
};

export default SocketService;
