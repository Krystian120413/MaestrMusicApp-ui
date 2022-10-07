import {
  PlaylistPanel,
  SongType,
} from 'components/playlist-panel/playlist-panel';
import styles from './liked-songs-panel.module.scss';

const songs: SongType[] = [
  {
    title: 'piosenka1',
    author: 'autor',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'piosenka2',
    author: 'autor',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'piosenka3',
    author: 'autor',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'piosenka4',
    author: 'autor',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'piosenka5',
    author: 'autor',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'piosenka6',
    author: 'autor',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'piosenka7',
    author: 'autor',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'piosenka8',
    author: 'autor',
    posterSrc: 'aleCo',
    duration: '21:37',
  },
  {
    title: 'piosenka9',
    author: 'autor',
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
