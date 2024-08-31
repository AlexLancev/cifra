import React from 'react';

import styles from './Сhapter.module.css';

interface ChapterTypePorps {
  chapterName: string;
}

export const Сhapter: React.FC<ChapterTypePorps> = ({ chapterName }) => {
  return <b className={styles.СhapterName}>{chapterName}</b>;
};
