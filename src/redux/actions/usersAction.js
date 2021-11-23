import axios from 'axios';
import {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  SET_ALL_USERS,
  SET_ERROR,
  SET_LOADING_TRUE,
} from '../types/usersTypes';

export const createUser = (user) => {
  return {
    type: CREATE_USER,
    payload: user,
  };
};
export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};
export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_ALL_USERS,
    payload: users,
  };
};
export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};
export const setLoadingTrue = () => {
  return {
    type: SET_LOADING_TRUE,
  };
};

export const getUsersAsync = () => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const res = await axios.get('http://localhost:5000/users');

    if (res.status === 200) {
      let users = [];

      for (let i = 0; i < res.data.length; i++) {
        users.push(res.data[i]);
      }
      return dispatch(setUsers(users));
    }
  } catch (error) {
    return dispatch(setError(error?.response?.data?.error));
  }
};

export const deleteUserAsync = (userId) => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const res = await axios.delete(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_BACKEND_URL_PORT}/users/${userId}`
    );
    if (res.status === 200) {
      return dispatch(deleteUser(userId));
    }
  } catch (error) {
    return dispatch(setError(error?.response?.data?.error));
  }
};

export const updateUserAsync = (user) => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const res = await axios.put(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_BACKEND_URL_PORT}/users/${user.id}`,
      user
    );
    if (res === 200) {
      return dispatch(updateUser(user));
    }
  } catch (error) {
    return dispatch(setError(error?.response?.data?.error));
  }
};

export const createUserAsync = () => async (dispatch) => {
  dispatch(setLoadingTrue());

  try {
    const res = await axios.post(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_BACKEND_URL_PORT}/users`,
      user
    );
    if (res === 201) {
      return dispatch(createUser(res.data));
    }
  } catch (error) {
    return dispatch(setError(error?.response?.data?.error));
  }
};
