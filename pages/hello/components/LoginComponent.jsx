import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {errorToast, infoToast} from '../../../utils/ModalUtil';
import {axiosRequest} from '../../../service/AxiosService';
import {getSessionUserId} from '../../../service/SessionService';
import {HelloStyles} from '../HelloStyle';

const LoginComponent = ({setPage, setUserId, setIsSession}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!id || !password) {
      infoToast('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    const postData = {
      id: id,
      password: password,
    };

    try {
      await axiosRequest('post', '/user/login', postData)
        .then(async response => {
          if (response.data === '401 UNAUTHORIZED') {
            errorToast('아이디 또는 비밀번호가 일치하지 않습니다.');
            return;
          }

          if (response.data === '409 CONFLICT') {
            errorToast('다른 환경에서 이미 로그인 중입니다.');
            return;
          }

          setPage(0);
          await getSessionUserId(setUserId, setIsSession);
        })
        .catch(() => {});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={HelloStyles.loginForm}>
      <Text style={HelloStyles.loginTitle}>Underworld-LINE</Text>
      <TextInput
        style={HelloStyles.input}
        placeholder="아이디"
        onChangeText={text => setId(text)}
      />
      <TextInput
        style={HelloStyles.input}
        placeholder="비밀번호"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <View style={HelloStyles.submit}>
        <Button
          title="로그인"
          onPress={handleLogin}
          color="#06c755"
          borderRadius={10}
        />
        <Text style={HelloStyles.text1}>
          계정이 없으신가요?{' '}
          <Text style={HelloStyles.text2} onPress={() => setPage(1)}>
            회원가입
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginComponent;
