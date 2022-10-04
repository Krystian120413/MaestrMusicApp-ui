import { useState } from 'react';
import clsx from 'clsx';
import PauseIcon from 'assets/icons/pause-icon.svg';
import PlayIcon from 'assets/icons/play-icon.svg';
import { SongDescription } from 'components/song-description';
import styles from './song-in-list.module.scss';

type SongInListType = {
  id?: number;
  title?: string;
  author?: string;
  posterSrc?: string;
  duration?: string;
  isSongPlaying: boolean;
  setSongIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SongInList = ({
  id = 0,
  title,
  author,
  posterSrc,
  duration = '00:00',
  isSongPlaying,
  setSongIsPlaying,
}: SongInListType) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   setSongIsPlaying(isPlaying);
  // }, [isPlaying]);

  return (
    <div className={styles.songInListWrapper}>
      <button
        type="button"
        className={clsx(styles.button, styles.playButton)}
        onClick={() => setIsPlaying((prevState) => !prevState)}
      >
        {isPlaying ? (
          <PauseIcon className={styles.playButtonPause} />
        ) : (
          <PlayIcon className={styles.playButton} />
        )}
        play/pause
      </button>
      <span className={styles.songInListWrapperId}>{id}</span>
      <SongDescription title={title} author={author} posterSrc={posterSrc} />
      <span className={styles.songInListWrapperDuration}>{duration}</span>
    </div>
  );
};
