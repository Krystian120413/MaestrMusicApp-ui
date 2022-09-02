import React, { useEffect, useRef, useState } from 'react';
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
  looped: {
    isLooped: boolean;
    setIsLooped: React.Dispatch<React.SetStateAction<boolean>>;
  };
  liked: {
    isLiked: boolean;
    setIsLiked: React.Dispatch<React.SetStateAction<boolean>>;
  };
  onNextSong: () => void;
  onPrevSong: () => void;
};

export const Player = ({
  className,
  audioSrc = '',
  expanded,
  looped,
  liked,
  onNextSong,
  onPrevSong,
}: PlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.src = audioSrc;
    setDuration(audioRef.current?.duration);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioSrc;
      setDuration(audioRef.current?.duration);
    }
  }, [audioSrc]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.play();
      else audioRef.current.pause();
      setDuration(audioRef.current.duration);
    }
  }, [isPlaying, audioRef.current?.src, audioRef.current?.duration]);

  useEffect(() => {
    const trackProgressUpdate = setInterval(() => {
      if (audioRef.current) {
        setTrackProgress(audioRef.current.currentTime);
        if (audioRef.current.currentTime === audioRef.current.duration) {
          setDuration(0);
          if (!looped.isLooped) onNextSong();
        }
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
          max={duration || `${duration}`}
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
          onClick={() =>
            looped.setIsLooped((prevLooppedState) => !prevLooppedState)
          }
        >
          loop
          <LoopIcon
            className={clsx(
              styles.loopIcon,
              looped.isLooped && styles.loopIconActivate
            )}
          />
        </button>
        <button
          type="button"
          className={clsx(
            styles.button,
            styles.prevButton,
            expanded && styles.prevButtonExpanded
          )}
          onClick={() => {
            onPrevSong();
          }}
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
          onClick={() => {
            onNextSong();
          }}
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
          onClick={() => liked.setIsLiked((prevLikedState) => !prevLikedState)}
        >
          heart
          <HeartIcon
            className={clsx(
              styles.heartIcon,
              liked.isLiked && styles.heartIconActivate
            )}
          />
        </button>
      </div>
    </div>
  );
};
