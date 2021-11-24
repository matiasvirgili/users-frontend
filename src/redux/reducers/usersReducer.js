import {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  SET_ALL_USERS,
  SET_ERROR,
  SET_LOADING_TRUE,
} from '../types/usersTypes';

const initialState = {
  list: [],
  error: '',
  isLoading: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        error: '',
        list: [...state.list, action.payload],
        isLoading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        error: '',
        list: state.list.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
        isLoading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        error: '',
        list: state.list.filter((user) => user._id !== action.payload),
        isLoading: false,
      };
    case SET_ALL_USERS:
      return {
        ...state,
        error: '',
        list: action.payload,
        isLoading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload || 'An error ocurred',
        isLoading: false,
      };
    case SET_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
