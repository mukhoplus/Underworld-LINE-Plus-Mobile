import {StyleSheet} from 'react-native';

export const HelloStyles = StyleSheet.create({
  loginForm: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    paddingTop: '60%',
  },
  signupForm: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    paddingTop: '55%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#06C755',
  },
  input: {
    width: '80%',
    marginTop: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 15,
    borderColor: 'lightgray',
    borderRadius: 10,
    borderWidth: 1,
  },
  submit: {
    marginTop: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
  },
  text1: {
    marginTop: '5%',
    textAlign: 'center',
  },
  text2: {
    color: 'blue',
  },
});
