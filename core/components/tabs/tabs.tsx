import { TabColor } from 'types/tab';
import { Tab } from 'components/tab/tab';
import styles from './tabs.module.scss';

export const Tabs = () => {
  return (
    <div className={styles.wrapper}>
      <Tab title="PLAYLISTS" backgroundColor={TabColor.DARK_ORANGE} />
    </div>
  );
};
