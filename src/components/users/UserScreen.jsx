import React from 'react';
import { UserList } from './UserList';
import styles from './UserScreen.module.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';

export const UserScreen = () => {
  const history = useHistory();
  const { list: users, error, isloading } = useSelector((state) => state.users);

  const handleAddClick = () => {
    history.push('users/create');
  };

  const handleModifyUser = (id) => {
    history.push(`/users/update/${id}`);
  };

  return (
    <div>
      <h2>Users</h2>
      <button className={styles.newButton} onClick={handleAddClick}>
        New User
      </button>
      {isloading && (
        <div className={styles.loadingBar}>
          <LinearProgress />
        </div>
      )}
      <p>{error}</p>
      <UserList users={users} onModify={handleModifyUser} />
    </div>
  );
};
