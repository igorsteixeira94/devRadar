import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Routes />
    </>
  );
};

export default App;
