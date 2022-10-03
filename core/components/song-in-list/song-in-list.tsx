import { SongDescription } from 'components/song-description';
import styles from './song-in-list.module.scss';

export type SongInListType = {
  id?: number;
  title?: string;
  author?: string;
  posterSrc?: string;
  duration?: string;
};

export const SongInList = ({
  id = 0,
  title,
  author,
  posterSrc,
  duration = '00:00',
}: SongInListType) => {
  return (
    <div className={styles.songInListWrapper}>
      <span className={styles.songInListWrapperId}>{id}</span>
      <SongDescription title={title} author={author} posterSrc={posterSrc} />
      <span className={styles.songInListWrapperDuration}>{duration}</span>
    </div>
  );
};
