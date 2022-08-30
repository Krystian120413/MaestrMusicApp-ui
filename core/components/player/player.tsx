import { useEffect, useState } from 'react';
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
  const [audio, setAudio] = useState<null | HTMLAudioElement>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [duration, setDuration] = useState(1);

  useEffect(() => {
    setAudio(new Audio(audioSrc));
    if (audio) setDuration(audio?.duration);
  }, []);

  useEffect(() => {
    setSongSrc(audioSrc);
    if (audio) {
      audio.src = songSrc;
      setDuration(audio.duration);
    }
  }, [audio, audioSrc, songSrc]);

  useEffect(() => {
    if (audio) {
      if (isPlaying) audio.play();
      else audio.pause();
    }
  }, [audio, isPlaying]);

  useEffect(() => {
    const trackProgressUpdate = setInterval(() => {
      if (audio) setTrackProgress(audio?.currentTime);
    }, 1000);

    return () => clearInterval(trackProgressUpdate);
  }, []);

  const onTimeChange = (value: number) => {
    if (audio) {
      audio.currentTime = value;
      setTrackProgress(audio.currentTime);
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
          step={1}
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
