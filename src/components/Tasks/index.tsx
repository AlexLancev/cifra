import React from 'react';

import { Сhapter } from 'components/Сhapter';
import { ListSections } from 'components/ListSections';

import { ListSectionsTasks } from 'constans/listSectionsData';

export const Tasks: React.FC = () => {
  return (
    <>
      <Сhapter chapterName='Задачи' />
      <ListSections list={ListSectionsTasks} />
    </>
  );
};
