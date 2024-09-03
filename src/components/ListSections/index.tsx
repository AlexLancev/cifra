import React from 'react';
import { NavLink } from 'react-router-dom';

import { ListSectionsType } from 'types/ListSectionsType';

import styles from './ListSections.module.css';

interface ListSectionsProps {
  list: ListSectionsType[];
}

export const ListSections: React.FC<ListSectionsProps> = ({ list }) => {
  if (!list || list.length === 0) return null;

  return (
    <ul className={styles.ListSections}>
      {list.map((item: ListSectionsType, index: number) => (
        <li className={styles.ListSectionsItem} key={item.id || index}>
          {item.toLink ? (
            <NavLink className={styles.ListSectionsLink} to={item.toLink}>
              {item.icon && <img src={item.icon} alt='' aria-hidden />}
              {item.chapter}
            </NavLink>
          ) : (
            <span className={styles.ListSectionsLink}>
              {item.icon && <img src={item.icon} alt='' aria-hidden />}
              {item.chapter}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};
