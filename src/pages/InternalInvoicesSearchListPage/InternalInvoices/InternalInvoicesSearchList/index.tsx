import React from 'react';

import { internalInvoicesList } from 'constans/InternalInvoicesList';

import styles from './InternalInvoicesSearchList.module.css';

export const InternalInvoicesSearchList: React.FC = () => {
  if (!internalInvoicesList || internalInvoicesList.length === 0) null;

  return (
    <ul className={`${styles.internalInvoicesSearchList} ${styles.SearchList}`}>
      {internalInvoicesList.map((item, index: number) => (
        <li className={styles.SearchListItem} key={item.id || index}>
          <span className={styles.SearchListNumber}>
            {item.internalInvoicesNumber}
          </span>
          <b className={styles.SearchListCat}>Отправитель:</b>
          {item.sender}
          <br />
          <b className={styles.SearchListCat}>Получатель:</b>
          {item.recipient}
          <br />
          <b className={styles.SearchListCat}>Дата выдачи:</b>
          {item.dateOfIssue}
          <br />
        </li>
      ))}
    </ul>
  );
};
