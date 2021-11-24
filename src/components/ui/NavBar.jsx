import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <ul>
        <li>
          <NavLink to="/home" className={styles.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={styles.link}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
