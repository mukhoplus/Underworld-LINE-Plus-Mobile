import {StyleSheet, Dimensions} from 'react-native';

const windowDimensions = Dimensions.get('window');

export const ChatStyles = StyleSheet.create({
  main: {
    flex: 1,
  },
  submit: {
    height: 53,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 2,
  },
  input: {
    flex: 9,
    marginTop: 2,
    marginLeft: 2,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  btn: {
    flex: 1.4,
    margin: 2,
    backgroundColor: '#06c755',
    width: 50,
    height: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 17,
  },
  btnDisabled: {
    flex: 1.4,
    margin: 2,
    backgroundColor: 'lightgray',
    width: 50,
    height: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 17,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  btnTextDisabled: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 15,
  },
  avatarContainer: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowDimensions.width * 0.12,
    height: windowDimensions.width * 0.12,
    borderRadius: 50,
    marginRight: 5,
    marginVertical: 5,
  },
  chatList: {
    flex: 1,
    height: windowDimensions.height - (103 + 24),
    paddingLeft: 10,
    paddingRight: 10,
  },
  dateLine: {
    display: 'flex',
    justifyContent: 'center',
  },
  chatDate: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(155, 155, 155)',
    color: 'white',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  myNotRead: {
    color: 'black',
    margin: 0,
    paddingBottom: 5,
    textAlign: 'right',
    minWidth: '20%',
  },
  yourNotRead: {
    color: 'black',
    margin: 0,
    paddingBottom: 5,
    textAlign: 'left',
    minWidth: '20%',
  },
  myChat: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    maxWidth: '80%',
    display: 'inline-self',
    alignItems: 'flex-end',
  },
  yourChat: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    maxWidth: '80%',
    display: 'inline-self',
    alignItems: 'flex-end',
  },
  myText: {
    fontSize: 16,
    alignItems: 'flex-end',
    margin: 5,
    padding: 10,
    maxWidth: '70%',
    backgroundColor: '#06c755',
    color: 'white',
    borderRadius: 10,
  },
  yourText: {
    fontSize: 16,
    alignItems: 'flex-start',
    margin: 5,
    padding: 10,
    maxWidth: '70%',
    backgroundColor: '#e0e0e0',
    color: 'black',
    borderRadius: 10,
  },
  keyboardOff: {
    height: '100%',
  },
  keyboardOn: {
    height: '91%',
  },
});