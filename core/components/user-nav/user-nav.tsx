import { useAuth } from 'helpers/authorization';
import SettingsIcon from 'assets/icons/settings-icon.svg';
import styles from './user-nav.module.scss';

export const UserNav = () => {
  const auth = useAuth();
  return (
    <nav className={styles.nav}>
      <button type="button">
        <SettingsIcon />
      </button>
      <div>
        {auth?.user?.name}
        <button
          className={styles.navButton}
          type="button"
          onClick={auth?.logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
