import { useAuth } from 'helpers/authorization';
import styles from './user-nav.module.scss';

type UserNavProps = {
  setPlayingSongId: (id: number | ((prevSongId: number) => number)) => void;
  setIsSongPlaying: (
    isPlaying: boolean | ((prevState: boolean) => boolean)
  ) => void;
};

export const UserNav = ({
  setIsSongPlaying,
  setPlayingSongId,
}: UserNavProps) => {
  const auth = useAuth();
  return (
    <nav className={styles.nav}>
      <div>
        {auth?.user?.name}
        <button
          className={styles.navButton}
          type="button"
          onClick={() => {
            auth?.logout();
            setPlayingSongId(-1);
            setIsSongPlaying(false);
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
