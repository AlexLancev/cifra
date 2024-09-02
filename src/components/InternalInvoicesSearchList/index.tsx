import React from 'react';

import { internalInvoicesList } from 'constans/InternalInvoicesList';

import styles from './InternalInvoicesSearchList.module.css';

export const InternalInvoicesSearchList: React.FC = () => {
  if (!internalInvoicesList || internalInvoicesList.length === 0) null;

  return (
    <ul className={`${styles.internalInvoicesSearchList} ${styles.SearchList}`}>
      {internalInvoicesList.map((item, index: number) => (
        <li
          className={styles.internalInvoicesSearchListItem}
          key={item.id || index}
        >
          <span className={styles.SearchListNumber}>
            {item.internalInvoicesNumber}
          </span>
          <b className={styles.SearchListCat}>{item.sender}</b>
          <b className={styles.SearchListCat}>{item.recipient}</b>
          <b className={styles.SearchListCat}>{item.dateOfIssue}</b>
        </li>
      ))}
    </ul>
  );
};
