import SettingsIcon from 'assets/icons/settings-icon.svg';
import styles from './user-nav.module.scss';

export const UserNav = () => {
  return (
    <nav className={styles.nav}>
      <SettingsIcon />
    </nav>
  );
};
