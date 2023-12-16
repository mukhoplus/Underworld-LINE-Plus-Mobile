import {StyleSheet, Dimensions} from 'react-native';

const windowDimensions = Dimensions.get('window');

export const MainStyles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  info: {
    flex: 1,
    width: '100%',
    height: windowDimensions.height * 0.9,
  },
  navbar: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
  },
  tab: {
    width: '33.33%',
    backgroundColor: 'whitesmoke',
  },
  tabIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '5%',
  },
  tabText: {
    textAlign: 'center',
    paddingBottom: '5%',
  },
  tabIconSelected: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '5%',
    color: '#06C755',
  },
  tabTextSelected: {
    textAlign: 'center',
    paddingBottom: '5%',
    color: '#06C755',
  },
  badgeContainer: {
    backgroundColor: 'rgb(220, 75, 60)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    height: '3%',
    borderRadius: 50,
    position: 'absolute',
    bottom: '3.8%',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  headerIcon: {
    marginRight: 10,
  },
});
