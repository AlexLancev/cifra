import React from 'react';

import { Сhapter } from 'components/Сhapter';
import { ListSections } from 'components/ListSections';

import { ListSectionsSettings } from 'constans/listSectionsData';

export const Settings: React.FC = () => {
  return (
    <>
      <Сhapter chapterName='Настройки' />
      <ListSections list={ListSectionsSettings} />
    </>
  );
};
