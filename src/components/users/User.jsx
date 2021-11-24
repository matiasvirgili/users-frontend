import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes as DeleteIcon } from 'react-icons/fa';
import { MdEdit as EditIcon } from 'react-icons/md';
import styles from './User.module.css';
import { useDispatch } from 'react-redux';
import { deleteUserAsync } from '../../redux/actions/usersAction';

export const User = ({ user, onModify }) => {
  const { _id, name, lastName, telephone, direction, dni } = user;
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <span className={styles.title}>Full name</span>
        <span className={styles.content}>{name + ' ' + lastName}</span>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Telephone</span>
        <span className={styles.content}>{telephone}</span>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Direction</span>
        <span className={styles.content}>{direction}</span>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>DNI</span>
        <span className={styles.content}>{dni}</span>
      </div>
      <div className={styles.actions}>
        <EditIcon className={styles.editIcon} onClick={() => onModify(_id)} />
        <DeleteIcon
          className={styles.deleteIcon}
          onClick={() => dispatch(deleteUserAsync(_id))}
        />
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  onModify: PropTypes.func.isRequired,
};
