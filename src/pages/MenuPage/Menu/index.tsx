import React from 'react';

import { Сhapter } from 'components/Сhapter';
import { ListSections } from 'components/ListSections';

import { ListSectionsMenu } from 'constans/listSectionsData';

export const Menu: React.FC = () => {
  return (
    <>
      <Сhapter chapterName='Меню' />
      <ListSections list={ListSectionsMenu} />
    </>
  );
};
