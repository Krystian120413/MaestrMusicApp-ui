import { SongInList, SongInListType } from 'components/song-in-list';
import styles from './liked-songs-panel.module.scss';

const songs: SongInListType[] = [
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
      {songs.map(({ title, author, posterSrc, duration }, index) => (
        <SongInList
          key={title}
          id={index + 1}
          title={title}
          author={author}
          posterSrc={posterSrc}
          duration={duration}
        />
      ))}
    </div>
  );
};
