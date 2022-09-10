import { TabColor } from 'types/tab-type';
import { Tab } from 'components/tab/tab';
import styles from './tabs.module.scss';

const tabs = [
  {
    title: 'PLAYLISTS',
    backgroundColor: TabColor.DARK_ORANGE,
    className: styles.playlists,
  },
  {
    title: 'LIKED',
    backgroundColor: TabColor.GREEN,
    className: styles.liked,
  },
  {
    title: 'GENRES',
    backgroundColor: TabColor.LIGHT_GREEN,
    className: styles.genres,
  },
  {
    title: 'RECOMMENDED',
    backgroundColor: TabColor.RED,
    className: styles.recommended,
  },
  {
    title: 'USER RADIO',
    backgroundColor: TabColor.ORANGE,
    className: styles.userRadio,
  },
];

export const Tabs = () => {
  return (
    <div className={styles.wrapper}>
      {tabs.map(({ title, backgroundColor, className }) => (
        <Tab
          key={title}
          className={className}
          title={title}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
};
