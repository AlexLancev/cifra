import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import BurgerIcon from './img/svg/burger.svg?react';
import ScanIcon from './img/svg/scan.svg?react';
import BackIcon from './img/svg/back.svg?react';

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

  const handleBackHome = () => {
    if (!isHomePage) {
      navigate('/');
    }
  };

  return (
    <nav
      className={styles.NavigationBar}
      aria-label='Быстрая навигация по сайту'
    >
      <ul className={styles.NavigationBarList}>
        <li className={styles.NavigationBarListItem}>
          <button
            className={styles.NavigationBarItemLink}
            onClick={handleBackHome}
            disabled={isHomePage}
            type='button'
          >
            <BurgerIcon width={24} height={24} />
            Меню
          </button>
        </li>
        <li className={styles.NavigationBarListItem}>
          <button disabled className={styles.NavigationBarItemLink}>
            <ScanIcon width={24} height={24} />
            Сканер
          </button>
        </li>
        <li className={styles.NavigationBarListItem}>
          <button
            className={styles.NavigationBarItemLink}
            onClick={handleBackNavigation}
            disabled={isHomePage}
            type='button'
          >
            <BackIcon width={24} height={24} />
            Назад
          </button>
        </li>
      </ul>
    </nav>
  );
};
