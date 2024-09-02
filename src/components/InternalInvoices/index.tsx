import React from 'react';

import { Сhapter } from 'components/Сhapter';

import styles from './InternalInvoices.module.css';

export const InternalInvoices: React.FC = () => {
  return (
    <div className={styles.internalInvoices}>
      <Сhapter chapterName='ВЗН УП (Расход)' isVisibleButton />
    </div>
  );
};
