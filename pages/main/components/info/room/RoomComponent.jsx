import React from 'react';
import RoomInfo from './RoomInfo';

const RoomComponent = ({userId, roomList, setRoomId}) => {
  return <RoomInfo userId={userId} roomList={roomList} setRoomId={setRoomId} />;
};

export default RoomComponent;
