import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Toast from 'react-native-toast-message';
import Hello from './pages/hello/Hello';
import Main from './pages/main/Main';
import {getSessionUserId} from './service/SessionService';

const App = () => {
  const [userId, setUserId] = useState(0);
  const [isSession, setIsSession] = useState(false);

  useEffect(() => {
    getSessionUserId(setUserId, setIsSession);
  }, [userId]);

  if (!isSession) {
    return;
  }

  return (
    <>
      <SafeAreaView>
        {userId === 0 ? (
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Hello setUserId={setUserId} setIsSession={setIsSession} />
          </ScrollView>
        ) : (
          <Main userId={userId} setUserId={setUserId} />
        )}
      </SafeAreaView>
      <Toast />
    </>
  );
};

export default App;
