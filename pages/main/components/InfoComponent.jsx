import React, {useEffect} from 'react';
import {ScrollView, Text, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import UserComponent from './info/user/UserComponent';
import RoomComponent from './info/room/RoomComponent';
import {axiosRequest} from '../../../service/AxiosService';
import SocketService from '../../../service/SocketService';
import {MainStyles} from '../MainStyle';

const InfoComponent = ({
  userId,
  setUserId,
  userList,
  setUserList,
  roomList,
  setRoomList,
  setRoomId,
  setChatList,
  allNotReadCount,
  menu,
  setMenu,
}) => {
  const resetStates = () => {
    setUserId(0);
    setUserList([]);
    setRoomId(0);
    setRoomList([]);
    setChatList([]);
  };

  const handleUserList = async () => {
    axiosRequest('get', '/user/list')
      .then(response => {
        const data = response.data;
        setUserList(data);
      })
      .catch(() => {
        resetStates();
      });
  };

  const handleRoomList = async () => {
    axiosRequest('get', `/room/list/${userId}`)
      .then(response => {
        setRoomList(response.data);
      })
      .catch(() => {
        resetStates();
      });
  };

  useEffect(() => {
    handleUserList();
    handleRoomList();
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={MainStyles.main}>
        <View style={MainStyles.info}>
          {menu === 0 ? (
            <UserComponent
              userId={userId}
              userList={userList}
              setRoomId={setRoomId}
            />
          ) : (
            <RoomComponent
              userId={userId}
              roomList={roomList}
              setRoomId={setRoomId}
            />
          )}
        </View>
        <View style={MainStyles.navbar}>
          <Pressable style={MainStyles.tab} onPress={() => setMenu(0)}>
            <Icon
              style={
                menu === 0 ? MainStyles.tabIconSelected : MainStyles.tabIcon
              }
              name="user"
              size={25}
              color="black"
            />
            <Text
              style={
                menu === 0 ? MainStyles.tabTextSelected : MainStyles.tabText
              }>
              친구
            </Text>
          </Pressable>
          <Pressable style={MainStyles.tab} onPress={() => setMenu(1)}>
            <Icon
              style={
                menu === 1 ? MainStyles.tabIconSelected : MainStyles.tabIcon
              }
              name="message1"
              size={25}
              color="black"
            />
            <Text
              style={
                menu === 1 ? MainStyles.tabTextSelected : MainStyles.tabText
              }>
              채팅
            </Text>
          </Pressable>
          <Pressable
            style={MainStyles.tab}
            onPress={() => {
              axiosRequest('post', '/user/logout')
                .then(() => {
                  SocketService.close();
                })
                .catch()
                .finally(() => {
                  resetStates();
                });
            }}>
            <Icon
              style={MainStyles.tabIcon}
              name="logout"
              size={25}
              color="black"
            />
            <Text style={MainStyles.tabText}>로그아웃</Text>
          </Pressable>
        </View>
        <Badge count={allNotReadCount} setMenu={setMenu} />
      </View>
    </ScrollView>
  );
};

const Badge = ({count, setMenu}) => {
  if (count === 0) {
    return;
  }

  if (count > 999) {
    count = '999+';
  }

  const strCount = String(count);
  let width;
  let left;
  if (strCount.length <= 2) {
    width = '6%';
    left = '50%';
  } else if (strCount.length === 3) {
    width = '7%';
    left = '49.5%';
  } else {
    width = '8%';
    left = '49%';
  }

  return (
    <Pressable
      style={[MainStyles.badgeContainer, {width, left}]}
      onPress={() => setMenu(1)}>
      <Text style={MainStyles.badgeText}>{strCount}</Text>
    </Pressable>
  );
};

export default InfoComponent;
