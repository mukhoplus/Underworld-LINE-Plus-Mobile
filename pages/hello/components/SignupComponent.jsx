import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {successToast, infoToast, errorToast} from '../../../utils/ModalUtil';
import {getSessionUserId} from '../../../service/SessionService';
import {axiosRequest} from '../../../service/AxiosService';
import {HelloStyles} from '../HelloStyle';

const SignupComponent = ({setPage, setUserId, setIsSession}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = async () => {
    // ID Check
    if (!id) {
      infoToast('아이디를 입력해주세요.');
      return;
    }

    if (!/^[a-z0-9_-]{5,20}$/.test(id)) {
      infoToast('아이디는 5-20자의 영어 소문자, 숫자, _, -만 사용 가능합니다.');
      return;
    }

    try {
      const response = await axiosRequest('get', `/user/id/${id}`);

      if (response.data) {
        infoToast('사용할 수 없는 아이디입니다.');
        return;
      }
    } catch (error) {
      errorToast('에러가 발생했습니다.');
      return;
    }

    // Password Check
    if (!password) {
      infoToast('비밀번호를 입력해주세요.');
      return;
    }

    if (!/^[a-zA-Z0-9_\-!@#$%^&*]{8,16}$/.test(password)) {
      infoToast('비밀번호는 8-16자의 영어, 숫자, 특수문자만 사용 가능합니다.');
      return;
    }

    const hasEnglish = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[_\-!@#$%^&*]/.test(password);

    if (!hasEnglish || !hasNumber || !hasSpecialCharacter) {
      infoToast(
        '비밀번호는 영어, 숫자, 특수문자가 각각 1자 이상씩 있어야 합니다.',
      );
      return;
    }

    // Name Check
    if (!name) {
      infoToast('이름을 입력해주세요.');
      return;
    }

    if (!/^[가-힣A-Za-z]{1,40}$/.test(name)) {
      infoToast('이름은 1~40자의 한글, 영문 대/소문자를 사용해 주세요.');
      return;
    }

    try {
      const response = await axiosRequest('get', `/user/name/${name}`);

      if (response.data) {
        infoToast('사용할 수 없는 이름입니다.');
        return;
      }
    } catch (error) {
      errorToast('에러가 발생했습니다.');
      return;
    }

    // Signup
    const postData = {
      id: id,
      password: password,
      name: name,
    };

    axiosRequest('post', '/user/signup', postData)
      .then(async () => {
        await getSessionUserId(setUserId, setIsSession);
        successToast(`${name}님 반갑습니다!`);
        setPage(0);
      })
      .catch(() => {});
  };

  return (
    <View style={HelloStyles.signupForm}>
      <Text style={HelloStyles.title}>회원가입</Text>
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
      <TextInput
        style={HelloStyles.input}
        placeholder="이름"
        onChangeText={text => setName(text)}
      />
      <View style={HelloStyles.submit}>
        <Button
          title="회원가입"
          onPress={handleSignup}
          color="#06c755"
          autoCapitalize="words"
          borderRadius={10}
        />
        <Text style={HelloStyles.text1}>
          계정이 있으신가요?{' '}
          <Text style={HelloStyles.text2} onPress={() => setPage(0)}>
            로그인
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignupComponent;
