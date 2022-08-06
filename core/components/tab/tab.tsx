import clsx from 'clsx';
import { TabColor } from 'types/tab';
import styles from './tab.module.scss';

type TabProps = {
  className?: string;
  title: string;
  backgroundColor?: TabColor;
};

export const Tab = ({ className, title, backgroundColor }: TabProps) => {
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
    <div className={clsx(className, styles.wrapper)}>
      <div className={clsx(styles.card, changeCardColor)}>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </div>
  );
};
