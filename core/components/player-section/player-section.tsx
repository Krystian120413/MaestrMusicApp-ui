import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useSongInfo } from 'hooks/useSongInfo';
import { SongDetailsType } from 'types/song-info-type';
import AddIcon from 'assets/icons/add-icon.svg';
import BackIcon from 'assets/icons/back-icon.svg';
import ExpandIcon from 'assets/icons/expand-icon.svg';
import { Player } from 'components/player/player';
import styles from './player-section.module.scss';

export const PlayerSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [songId, setSongId] = useState(0);
  const [audioSrc, setAudioSrc] = useState('');
  const [songDetails, setSongDetails] = useState<SongDetailsType>();
  const { data } = useSongInfo(songId);
  const cover = '';

  useEffect(() => {
    setAudioSrc(data.songSrc);
    setSongDetails(data.details);
  }, [audioSrc, data, songId]);

  const nextSongHandler = () => {
    setSongId((prevSongId) => prevSongId + 1);
  };

  const prevSongHandler = () => {
    setSongId((prevSongId) => prevSongId - 1);
  };

  return (
    <div className={clsx(styles.wrapper, isExpanded && styles.wrapperExpanded)}>
      <button
        type="button"
        className={clsx(
          styles.expandButtonInvisible,
          isExpanded && styles.expandButtonInvisibleExpanded
        )}
        onClick={() => setIsExpanded(true)}
      >
        expand button
      </button>
      {isExpanded && (
        <div className={styles.navigationButtons}>
          <button
            className={styles.backButton}
            type="button"
            onClick={() => setIsExpanded(false)}
          >
            BACK
            <BackIcon />
          </button>
          <button className={styles.addButton} type="button">
            ADD
            <AddIcon />
          </button>
        </div>
      )}
      <div
        className={clsx(
          styles.songDescriptionWrapper,
          isExpanded && styles.songDescriptionWrapperExpanded
        )}
      >
        <div className={clsx(styles.cover, isExpanded && styles.coverExpanded)}>
          {cover}
        </div>
        <div className={clsx(styles.title, isExpanded && styles.titleExpanded)}>
          {songDetails?.title}
        </div>
        <div
          className={clsx(styles.author, isExpanded && styles.authorExpanded)}
        >
          {songDetails?.author}
        </div>
      </div>
      <Player
        className={styles.playerWrapper}
        audioSrc={audioSrc}
        expanded={isExpanded}
        onPrevSong={prevSongHandler}
        onNextSong={nextSongHandler}
      />
      <button
        type="button"
        className={clsx(
          styles.expandButton,
          isExpanded && styles.expandButtonExpanded
        )}
        onClick={() => setIsExpanded(true)}
      >
        expand btn
        <ExpandIcon />
      </button>
    </div>
  );
};
