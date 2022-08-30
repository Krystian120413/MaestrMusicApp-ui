import { useEffect, useRef, useState } from 'react';
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
  expanded: boolean;
};

export const Player = ({ className, audioSrc = '', expanded }: PlayerProps) => {
  const [songSrc, setSongSrc] = useState(audioSrc);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [duration, setDuration] = useState(100);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.src = audioSrc;
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioSrc;
      setDuration(audioRef.current.duration);
    }
  }, [audioSrc, songSrc]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.play();
      else audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const trackProgressUpdate = setInterval(() => {
      if (audioRef.current) {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);

    return () => clearInterval(trackProgressUpdate);
  }, []);

  const onTimeChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef.current.currentTime);
    }
  };

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
        <input
          type="range"
          className={styles.range}
          min={0}
          max={duration}
          step={0.5}
          value={trackProgress}
          onChange={(e) => onTimeChange(Number(e.target.value))}
        />
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
