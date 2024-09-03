import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/Button';

import IconSettings from '../../assets/img/svg/settungsSearch.svg?react';
import IconCreate from '../../assets/img/svg/create.svg?react';

import styles from './Сhapter.module.css';

interface ChapterTypePorps {
  chapterName: string;
  isVisibleButton?: boolean;
}

export const Сhapter: React.FC<ChapterTypePorps> = ({
  chapterName,
  isVisibleButton,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.ChapterRow}>
      {isVisibleButton ? (
        <>
          <b className={styles.СhapterName}>{chapterName}</b>
          <div className={styles.СhapterRowBtn}>
            <Button
              variant={'primary'}
              size={'small'}
              type={'button'}
              onClick={handleClick}
            >
              <IconSettings width={14} height={14} />
              Поиск
            </Button>
            <Button variant={'primary'} size={'small'} type={'button'} disabled>
              <IconCreate width={14} height={14} />
              Создать
            </Button>
          </div>
        </>
      ) : (
        <b className={styles.СhapterName}>{chapterName}</b>
      )}
    </div>
  );
};
