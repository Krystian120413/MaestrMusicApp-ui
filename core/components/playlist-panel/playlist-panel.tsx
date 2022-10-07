import { useState } from 'react';
import { SongInList } from 'components/song-in-list';
import styles from './playlist-panel.module.scss';

export type SongType = {
  title?: string;
  author?: string;
  posterSrc?: string;
  duration?: string;
};

type PlaylistPanelProps = {
  songs: SongType[];
};

export const PlaylistPanel = ({ songs }: PlaylistPanelProps) => {
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  return (
    <div className={styles.playlistWrapper}>
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
