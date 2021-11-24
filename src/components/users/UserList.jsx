import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const UserList = ({ users, onModify }) => {
  return users.map((user) => (
    <User key={user._id} user={user} onModify={onModify} />
  ));
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  onModify: PropTypes.func.isRequired,
};
