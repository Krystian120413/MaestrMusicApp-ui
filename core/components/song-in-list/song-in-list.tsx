import { useEffect, useState } from 'react';
import clsx from 'clsx';
import PauseIcon from 'assets/icons/pause-icon.svg';
import PlayIcon from 'assets/icons/play-icon.svg';
import { SongDescription } from 'components/song-description';
import styles from './song-in-list.module.scss';

type SongInListType = {
  songId?: number;
  index?: number;
  title?: string;
  author?: string;
  posterSrc?: string;
  duration?: string;
  isSongPlaying: boolean;
  onClick: () => void;
};

export const SongInList = ({
  songId,
  index,
  title,
  author,
  posterSrc,
  duration = '00:00',
  isSongPlaying,
  onClick,
}: SongInListType) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingSongId, setPlayingSongId] = useState(songId);

  useEffect(() => {
    setPlayingSongId(songId);
  }, [songId]);

  useEffect(() => {
    if (isSongPlaying) setIsPlaying(true);
    else setIsPlaying(false);
  }, [isSongPlaying]);

  return (
    <div className={styles.songInListWrapper}>
      <button
        type="button"
        className={clsx(styles.button, styles.playButton)}
        onClick={() => {
          onClick();
          setIsPlaying((prevState) => !prevState);
        }}
      >
        {isPlaying ? (
          <PauseIcon className={styles.playButtonPause} />
        ) : (
          <PlayIcon className={styles.playButton} />
        )}
        play/pause
      </button>
      <span className={styles.songInListWrapperId}>{index}</span>
      <SongDescription title={title} author={author} posterSrc={posterSrc} />
      <span className={styles.songInListWrapperDuration}>{duration}</span>
    </div>
  );
};
