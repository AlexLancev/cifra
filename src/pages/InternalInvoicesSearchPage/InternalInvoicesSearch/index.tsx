import React from 'react';

import { Сhapter } from 'components/Сhapter';
import { Search } from 'pages/InternalInvoicesSearchPage/InternalInvoicesSearch/Search';

export const InternalInvoicesSearch: React.FC = () => {
  return (
    <>
      <Сhapter chapterName='Фильтр ВЗН УП' isVisibleIcon />
      <Search />
    </>
  );
};
