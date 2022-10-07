import { useState } from 'react';
import { SongInList } from 'components/song-in-list';
import styles from './playlist-panel.module.scss';

export type SongType = {
  songId?: number;
  title?: string;
  author?: string;
  posterSrc?: string;
  duration?: string;
};

type PlaylistPanelProps = {
  songs: SongType[];
};

export const PlaylistPanel = ({ songs }: PlaylistPanelProps) => {
  const [playingSongIndex, setPlayingSongIndex] = useState(2);
  return (
    <div className={styles.playlistWrapper}>
      {songs.map(({ title, author, posterSrc, duration, songId }, index) => (
        <SongInList
          key={title}
          songId={songId}
          index={index + 1}
          title={title}
          author={author}
          posterSrc={posterSrc}
          duration={duration}
          isSongPlaying={playingSongIndex === index}
          onClick={() => setPlayingSongIndex(index)}
        />
      ))}
    </div>
  );
};
