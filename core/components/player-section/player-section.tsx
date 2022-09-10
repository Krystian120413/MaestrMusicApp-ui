import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useSongInfo } from 'hooks/useSongInfo';
import Image from 'next/image';
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
  const [songPoster, setSongPoster] = useState('');
  const { data } = useSongInfo(songId);

  const [isLooped, setIsLooped] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setAudioSrc(data.songSrc);
    setSongDetails(data.details);
    if (data.poster) setSongPoster(data.poster);
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
        <div
          className={clsx(
            styles.coverWrapper,
            isExpanded && styles.coverWrapperExpanded
          )}
        >
          <Image
            className={styles.cover}
            src={`data:;base64,${songPoster}`}
            width="100%"
            height="100%"
            layout="responsive"
            alt="okładka"
          />
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
        className={clsx(
          styles.playerWrapper,
          isExpanded && styles.playerWrapperExpanded
        )}
        audioSrc={audioSrc}
        expanded={isExpanded}
        onPrevSong={prevSongHandler}
        onNextSong={nextSongHandler}
        looped={{ isLooped, setIsLooped }}
        liked={{ isLiked, setIsLiked }}
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
