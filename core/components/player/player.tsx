import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import AddIcon from 'assets/icons/add-icon.svg';
import HeartIcon from 'assets/icons/heart-icon.svg';
import NextSongIcon from 'assets/icons/next-song-icon.svg';
import PauseIcon from 'assets/icons/pause-icon.svg';
import PlayIcon from 'assets/icons/play-icon.svg';
import styles from './player.module.scss';

type PlayerProps = {
  className?: string;
  audioSrc?: string;
  expanded: boolean;
  liked: {
    isLiked?: boolean;
    setIsLiked: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  };
  isSongPlaying: boolean;
  setIsSongPlaying: (
    isPlaying: boolean | ((prevState: boolean) => boolean)
  ) => void;
  onNextSong: () => void;
  onPrevSong: () => void;
  openModal: (newState: boolean) => void;
};

export const Player = ({
  className,
  audioSrc = '',
  expanded,
  liked,
  onNextSong,
  onPrevSong,
  isSongPlaying,
  setIsSongPlaying,
  openModal,
}: PlayerProps) => {
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
      if (isSongPlaying) audioRef.current.play();
      else audioRef.current.pause();
      setDuration(audioRef.current.duration);
    }
  }, [isSongPlaying, audioRef.current?.src, audioRef.current?.duration]);

  useEffect(() => {
    const trackProgressUpdate = setInterval(() => {
      if (audioRef.current) {
        setTrackProgress(audioRef.current.currentTime);
        if (audioRef.current.currentTime === audioRef.current.duration) {
          setDuration(0);
          onNextSong();
        }
      }
    }, 1000);

    return () => clearInterval(trackProgressUpdate);
  }, []);

  useEffect(() => {
    liked.setIsLiked(liked.isLiked);
  }, [liked.isLiked]);

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
          onClick={() => openModal(true)}
          className={clsx(
            styles.button,
            styles.addButton,
            expanded && styles.addButtonExpanded
          )}
        >
          add
          <AddIcon
            className={clsx(
              styles.addIcon && expanded && styles.addIconExpanded
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
          onClick={() => setIsSongPlaying((prevState) => !prevState)}
        >
          {isSongPlaying ? (
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
          onClick={() =>
            audioRef?.current?.src &&
            liked.setIsLiked((prevLikedState) => !prevLikedState)
          }
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
