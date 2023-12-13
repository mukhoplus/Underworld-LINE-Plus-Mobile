import React, {useState} from 'react';
import {View} from 'react-native';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';

const Hello = ({setUserId, setIsSession}) => {
  const [page, setPage] = useState(0);

  return (
    <View>
      {page === 0 ? (
        <LoginComponent
          setPage={setPage}
          setUserId={setUserId}
          setIsSession={setIsSession}
        />
      ) : (
        <SignupComponent
          setPage={setPage}
          setUserId={setUserId}
          setIsSession={setIsSession}
        />
      )}
    </View>
  );
};

export default Hello;
