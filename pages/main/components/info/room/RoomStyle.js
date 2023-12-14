import {StyleSheet} from 'react-native';

export const RoomStyles = StyleSheet.create({
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
    width: '20.5%',
    height: '95%',
    borderRadius: 50,
    marginRight: 5,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  avatarContainer: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    width: '110%',
    height: '100%',
    borderRadius: 50,
    marginLeft: 0,
    marginRight: 15,
    marginHorizontal: 15,
  },
  all: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginLeft: 20,
    marginRight: 20,
  },
  avatar: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
  },
  info: {
    flex: 9,
    paddingLeft: 10,
    paddingVertical: 10,
  },
  myLine: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  update: {
    fontSize: 10,
    alignItems: 'flex-end',
  },
  mpdate: {
    fontSize: 13,
    alignItems: 'flex-end',
  },
  badgeCountContainer: {
    backgroundColor: 'rgb(220, 75, 60)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    height: '90%',
    borderRadius: 50,
  },
  badgeCountText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
