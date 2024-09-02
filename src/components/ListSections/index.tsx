import React from 'react';
import { NavLink } from 'react-router-dom';

import { ListSectionsType } from 'types/ListSectionsType';

import styles from './ListSections.module.css';

interface ListSectionsProps {
  list: ListSectionsType[];
}

export const ListSections: React.FC<ListSectionsProps> = ({ list }) => {
  if (!list || list.length === 0) null;

  return (
    <ul className={styles.ListSections}>
      {list.map((item: ListSectionsType, index: number) => (
        <li className={styles.ListSectionsItem} key={item.id || index}>
          {item.toLink ? (
            <NavLink
              className={styles.ListSectionsLink}
              to={item.toLink}
              style={
                item.icon ? { backgroundImage: `url(${item.icon})` } : undefined
              }
            >
              {item.chapter}
            </NavLink>
          ) : (
            <span
              className={styles.ListSectionsLink}
              style={
                item.icon ? { backgroundImage: `url(${item.icon})` } : undefined
              }
            >
              {item.chapter}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};
