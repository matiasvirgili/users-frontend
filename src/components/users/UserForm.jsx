import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import styles from './UserForm.module.css';
import { useHistory, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import {
  updateUserAsync,
  createUserAsync,
} from '../../redux/actions/usersAction';
import { useDispatch } from 'react-redux';
import Button from '@mui/lab/LoadingButton';

const initialState = {
  name: '',
  lastName: '',
  telephone: '',
  direction: '',
  dni: '',
};

export const UserForm = () => {
  const [values, handleInputChange, setAllValues] = useForm(initialState);
  const history = useHistory();
  const dispatch = useDispatch();
  const { action, userId } = useParams();
  const userToModify = useSelector((state) =>
    state.users.list.find((user) => user.id === userId)
  );

  const isLoading = useSelector((state) => state.users.isLoading);

  useEffect(() => {
    if (action !== 'update' && action !== 'create') {
      history.replace('/users');
      return;
    }

    if (action === 'update') {
      if (userToModify) {
        setAllValues(userToModify);
      } else {
        history.replace('/users');
      }
    }
    return () => {};
  }, []);

  const handleCancel = () => {
    history.push('/users');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      values.name.length === 0 ||
      values.lastName.length === 0 ||
      values.telephone.length === 0 ||
      values.direction.length === 0 ||
      values.dni.length === 0
    ) {
      return;
    }
    if (action === 'update') {
      await dispatch(
        updateUserAsync({
          ...values,
          id: userId,
        })
      );
    } else {
      await dispatch(createUserAsync({ ...values }));
    }
    history.push('/users');
  };

  return (
    <form action="">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={values.name}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last name"
        value={values.lastName}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <input
        type="text"
        name="telephone"
        id="telephone"
        placeholder="Phone number"
        value={values.telephone}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <input
        type="text"
        name="dni"
        id="dni"
        placeholder="DNI"
        value={values.dni}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <input
        type="text"
        name="direction"
        id="direction"
        placeholder="Address"
        value={values.direction}
        onChange={handleInputChange}
        autoComplete="off"
      />

      <div className={styles.actionsContainer}>
        <Button
          color="primary"
          variant="contained"
          disableRipple
          type="submit"
          loading={isLoading}
          onClick={handleSubmit}
        >
          {action.toUpperCase()}
        </Button>
        <Button variant="outlined" type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};
