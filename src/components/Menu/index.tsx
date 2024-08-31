import React from 'react';

import { Сhapter } from 'components/Сhapter';
import { ListSections } from 'components/ListSections';

import { ListSectionsType } from 'types/ListSectionsType';

const ListSectionsMenu: ListSectionsType[] = [
  { id: '1', icon: '', chapter: 'Задачи', toLink: '/tasks' },
  { id: '2', icon: '', chapter: 'Настройки', toLink: '/settings' },
  { id: '3', icon: '', chapter: 'О системе', toLink: '' },
];

export const Menu: React.FC = () => {
  return (
    <>
      <Сhapter chapterName='Меню' />
      <ListSections list={ListSectionsMenu} />
    </>
  );
};
