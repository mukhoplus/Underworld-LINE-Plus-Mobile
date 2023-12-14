import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {Header} from '../../Header';
import {getRoomDateTime} from '../../../../../utils/DateTimeUtil';
import {LongStringUtil} from '../../../../../utils/LongStringUtil';
import {RoomStyles} from './RoomStyle';

const RoomInfo = ({userId, roomList, setRoomId}) => {
  return (
    <>
      <Header text="채팅" />
      <ScrollView style={RoomStyles.main}>
        {roomList.map(room => (
          <TouchableOpacity
            key={room.roomId}
            style={RoomStyles.all}
            onPress={() => setRoomId(room.roomId)}>
            <View style={RoomStyles.avatar}>
              <Avatar />
            </View>
            <View style={RoomStyles.info}>
              <View style={RoomStyles.line}>
                <View style={RoomStyles.name}>
                  {room.userId === userId ? (
                    <View style={RoomStyles.myLine}>
                      <Badge text="나" />
                      <Text style={RoomStyles.name}>
                        {LongStringUtil(room.roomName, 16)}
                      </Text>
                    </View>
                  ) : (
                    <Text style={RoomStyles.name}>
                      {LongStringUtil(room.roomName, 16)}
                    </Text>
                  )}
                </View>
                <Text style={RoomStyles.update}>
                  {getRoomDateTime(room.updatedAt)}
                </Text>
              </View>
              <View style={RoomStyles.line}>
                <Text style={RoomStyles.message}>
                  {LongStringUtil(room.lastMessage, 20)}
                </Text>
                <BadgeCount count={room.notReadCount} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

const Badge = () => {
  return (
    <View style={[RoomStyles.badgeContainer]}>
      <Text style={RoomStyles.badgeText}>나</Text>
    </View>
  );
};

const Avatar = () => {
  return <View style={RoomStyles.avatarContainer} />;
};

const BadgeCount = ({count}) => {
  if (count === 0) {
    return;
  }

  if (count > 300) {
    count = '300+';
  }

  const strCount = String(count);
  let width;
  if (strCount.length === 1) {
    width = '5.5%';
  } else if (strCount.length === 2) {
    width = '7.5%';
  } else if (strCount.length === 3) {
    width = '9.5%';
  } else {
    width = '11%';
  }

  return (
    <View style={[RoomStyles.badgeCountContainer, {width}]}>
      <Text style={RoomStyles.badgeCountText}>{strCount}</Text>
    </View>
  );
};

export default RoomInfo;
