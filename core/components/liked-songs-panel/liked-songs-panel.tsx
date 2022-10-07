import {
  PlaylistPanel,
  SongType,
} from 'components/playlist-panel/playlist-panel';
import styles from './liked-songs-panel.module.scss';

const songs: SongType[] = [
  {
    title: 'dupa',
    author: 'kupa',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'dupa',
    author: 'kupa',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'dupa',
    author: 'kupa',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'dupa',
    author: 'kupa',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'dupa',
    author: 'kupa',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'dupa',
    author: 'kupa',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'dupa',
    author: 'kupa',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'dupa',
    author: 'kupa',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'dupa',
    author: 'kupa',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'dupa',
    author: 'kupa',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
];

export const LikedSongsPanel = () => {
  return (
    <div className={styles.likedWrapper}>
      <PlaylistPanel songs={songs} />
    </div>
  );
};
