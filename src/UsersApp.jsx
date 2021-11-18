import React, { useEffect } from 'react';
import { MainRouter } from './routes/MainRouter';
import './UserApp.module.css';

function UsersApp() {
  useEffect(() => {
    console.log('hi');
    return () => {};
  }, []);
  return <MainRouter />;
}

export default UsersApp;
