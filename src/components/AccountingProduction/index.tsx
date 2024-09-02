import React from 'react';

import { Сhapter } from 'components/Сhapter';
import { ListSections } from 'components/ListSections';

import { ListSectionsAccountingProduction } from 'constans/listSectionsData';

export const AccountingProduction: React.FC = () => {
  return (
    <>
      <Сhapter chapterName='Учёт в производстве' />
      <ListSections list={ListSectionsAccountingProduction} />
    </>
  );
};

