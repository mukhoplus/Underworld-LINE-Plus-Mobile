import {StyleSheet} from 'react-native';

export const UserStyles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  badgeContainer: {
    backgroundColor: '#06C755',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    width: '5%',
    height: '35%',
    borderRadius: 50,
    margin: 5,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  myAvatarContainer: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    width: '11%',
    height: '75%',
    borderRadius: 50,
    margin: 10,
    marginRight: 15,
  },
  friendAvatarContainer: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    width: '11%',
    height: '75%',
    borderRadius: 50,
    margin: 10,
    marginRight: 20,
  },
  line: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    color: 'black',
  },
});
