import React from 'react';

import { Button } from 'components/Button';

import styles from './Сhapter.module.css';

interface ChapterTypePorps {
  chapterName: string;
  isVisibleButton?: boolean;
}

export const Сhapter: React.FC<ChapterTypePorps> = ({
  chapterName,
  isVisibleButton,
}) => {
  return (
    <>
      <b className={styles.СhapterName}>{chapterName}</b>
      {isVisibleButton && (
        <>
          <Button
            children={'Поиск'}
            variant={'primary'}
            size={'small'}
            type={'button'}
          />
          <Button
            children={'Создать'}
            variant={'primary'}
            size={'small'}
            type={'button'}
            disabled
          />
        </>
      )}
    </>
  );
};
