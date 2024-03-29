import React from 'react';
import clsx from 'clsx';
import { TabColor } from 'types/tab-type';
import styles from './tab.module.scss';

type TabProps = {
  className?: string;
  title: string;
  backgroundColor?: string | TabColor;
  onClick: () => void;
};

export const Tab = ({
  className,
  title,
  backgroundColor,
  onClick,
}: TabProps) => {
  const changeCardColor = () => {
    switch (backgroundColor) {
      case TabColor.RED:
        return styles.cardRed;
      case TabColor.ORANGE:
        return styles.cardOrange;
      case TabColor.DARK_ORANGE:
        return styles.cardDarkOrange;
      case TabColor.LIGHT_GREEN:
        return styles.cardLightGreen;
      case TabColor.GREEN:
        return styles.cardGreen;
      default:
        return '';
    }
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      <button type="button" className={styles.button} onClick={onClick}>
        <div className={clsx(styles.card, changeCardColor())}>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
      </button>
    </div>
  );
};
