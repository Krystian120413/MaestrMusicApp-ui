import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useSongInfo } from 'hooks/useSongInfo';
import PauseIcon from 'assets/icons/pause-icon.svg';
import PlayIcon from 'assets/icons/play-icon.svg';
import { SongDescription } from 'components/song-description';
import styles from './song-in-list.module.scss';

type SongInListType = {
  songId: number;
  index?: number;
  title?: string;
  author?: string;
  duration?: string;
  playingSongId: number;
  setPlayingSongId: (arg: number) => void;
  isSongPlaying: boolean;
  setIsSongPlaying: (
    isPlaying: boolean | ((prevState: boolean) => boolean)
  ) => void;
};

export const SongInList = ({
  songId,
  index,
  title,
  author,
  duration = '00:00',
  playingSongId,
  setPlayingSongId,
  isSongPlaying,
  setIsSongPlaying,
}: SongInListType) => {
  const [isThisSongPlaying, setIsThisSongPlaying] = useState(
    isSongPlaying && playingSongId === songId
  );
  const data = useSongInfo(songId);

  useEffect(() => {
    if (isSongPlaying && playingSongId === songId) setIsThisSongPlaying(true);
    else setIsThisSongPlaying(false);
  }, [isSongPlaying, playingSongId]);

  return (
    <div className={styles.songInListWrapper}>
      <button
        type="button"
        className={clsx(styles.button, styles.playButton)}
        onClick={() => {
          setIsSongPlaying((prevIsPlaying) =>
            songId === playingSongId ? !prevIsPlaying : true
          );
          setPlayingSongId(songId);
        }}
      >
        {isThisSongPlaying ? (
          <PauseIcon className={styles.playButtonPause} />
        ) : (
          <PlayIcon className={styles.playButton} />
        )}
        play/pause
      </button>
      <span className={styles.songInListWrapperId}>{index}</span>
      <SongDescription
        title={title}
        author={author}
        posterSrc={data.data.poster}
      />
      <span className={styles.songInListWrapperDuration}>{duration}</span>
    </div>
  );
};
