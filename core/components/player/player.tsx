import { useState } from 'react';
import clsx from 'clsx';
import HeartIcon from 'assets/icons/heart-icon.svg';
import LoopIcon from 'assets/icons/loop-icon.svg';
import NextSongIcon from 'assets/icons/next-song-icon.svg';
import PauseIcon from 'assets/icons/pause-icon.svg';
import PlayIcon from 'assets/icons/play-icon.svg';
import styles from './player.module.scss';

type PlayerProps = {
  className?: string;
  audioSrc?: string;
  duration?: number;
  expanded: boolean;
};

export const Player = ({
  className,
  audioSrc,
  duration = 0,
  expanded,
}: PlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div
      className={clsx(
        className,
        styles.globalWrapper,
        expanded && styles.globalWrapperExpanded
      )}
    >
      <div
        className={clsx(
          styles.rangeWrapper,
          expanded && styles.rangeWrapperExpanded
        )}
      >
        <input type="range" className={styles.range} min={0} max={duration} />
      </div>
      <div
        className={clsx(
          styles.playButtonWrapper,
          expanded && styles.playButtonWrapperExpanded
        )}
      >
        <button
          type="button"
          className={clsx(
            styles.button,
            styles.loopButton,
            expanded && styles.loopButtonExpanded
          )}
        >
          loop
          <LoopIcon />
        </button>
        <button
          type="button"
          className={clsx(
            styles.button,
            styles.prevButton,
            expanded && styles.prevButtonExpanded
          )}
        >
          prev
          <NextSongIcon />
        </button>
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
        <button
          type="button"
          className={clsx(
            styles.button,
            styles.nextButton,
            expanded && styles.nextButtonExpanded
          )}
        >
          next
          <NextSongIcon />
        </button>
        <button
          type="button"
          className={clsx(
            styles.button,
            styles.heartButton,
            expanded && styles.heartButtonExpanded
          )}
        >
          heart
          <HeartIcon />
        </button>
      </div>
    </div>
  );
};
