import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import styles from './NavigationBar.module.css';

export const NavigationBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const handleBackNavigation = () => {
    if (!isHomePage) {
      navigate(-1);
    }
  };

  return (
    <nav
      className={styles.NavigationBar}
      aria-label='Быстрая навигация по сайту'
    >
      <ul className={styles.NavigationBarList}>
        <li className={styles.NavigationBarListItem}>
          <NavLink className={styles.NavigationBarItemLink} to='/'>
            Меню
          </NavLink>
        </li>
        <li className={styles.NavigationBarListItem}>
          <span className={styles.NavigationBarItemLink}>Сканер</span>
        </li>
        <li className={styles.NavigationBarListItem}>
          <button
            className={`${styles.NavigationBarItemLink} ${isHomePage ? styles.NavigationBarItemLinkDisabled : ''}`}
            onClick={handleBackNavigation}
            disabled={isHomePage}
          >
            Назад
          </button>
        </li>
      </ul>
    </nav>
  );
};
