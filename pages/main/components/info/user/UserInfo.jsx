import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {Header} from '../../Header';
import {LongStringUtil} from '../../../../../utils/LongStringUtil';
import {UserStyles} from './UserStyle';

const UserInfo = ({userId, userInfo, handleChatIdToRoomId}) => {
  return (
    <>
      <Header text="친구" />
      <ScrollView style={UserStyles.main}>
        {userInfo.map(user => (
          <TouchableOpacity
            key={user.userId}
            style={UserStyles.line}
            onPress={() => handleChatIdToRoomId(user.userId)}>
            {user.userId === userId ? (
              <>
                <MyAvatar />
                <Badge />
                <Text style={UserStyles.name}>
                  {LongStringUtil(user.name, 16)}
                </Text>
              </>
            ) : (
              <>
                <FriendAvatar />
                <Text style={UserStyles.name}>
                  {LongStringUtil(user.name, 16)}
                </Text>
              </>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

const Badge = () => {
  return (
    <View style={[UserStyles.badgeContainer]}>
      <Text style={UserStyles.badgeText}>나</Text>
    </View>
  );
};

const MyAvatar = () => {
  return <View style={UserStyles.myAvatarContainer} />;
};

const FriendAvatar = () => {
  return <View style={UserStyles.friendAvatarContainer} />;
};

export default UserInfo;
