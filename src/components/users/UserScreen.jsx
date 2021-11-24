import React, { useEffect } from 'react';
import { UserList } from './UserList';
import styles from './UserScreen.module.css';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import { getUsersAsync } from '../../redux/actions/usersAction';

export const UserScreen = () => {
  const history = useHistory();
  const { list: users, error, isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  const handleAddClick = () => {
    history.push('users/create');
  };

  const handleModifyUser = (id) => {
    history.push(`/users/update/${id}`);
  };

  return (
    <div className={styles.titleUser}>
      <h2>Users</h2>
      <button className={styles.newButton} onClick={handleAddClick}>
        New User
      </button>
      {isLoading && (
        <div className={styles.loadingBar}>
          <LinearProgress />
        </div>
      )}
      <p>{error}</p>
      <UserList users={users} onModify={handleModifyUser} />
    </div>
  );
};
