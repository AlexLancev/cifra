import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/UI/Button';

import IconSettings from 'assets/img/svg/settungsSearch.svg?react';
import IconCreate from 'assets/img/svg/create.svg?react';
import IconClose from 'assets/img/svg/close.svg?react';

import styles from './Сhapter.module.css';

interface ChapterTypePorps {
  chapterName: string;
  isVisibleButton?: boolean;
  isVisibleIcon?: boolean;
}

export const Сhapter: React.FC<ChapterTypePorps> = ({
  chapterName,
  isVisibleButton,
  isVisibleIcon,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.ChapterRow}>
      {isVisibleIcon && (
        <button type='button' title='Закрыть форму поиска' disabled>
          <IconClose
            width={20}
            height={22}
            style={{ verticalAlign: 'middle' }}
          />
        </button>
      )}
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
