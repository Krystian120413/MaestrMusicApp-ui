import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useSongInfo } from 'hooks/useSongInfo';
import { SongDetailsType, SongIdGlobalType } from 'types/song-info-type';
import AddIcon from 'assets/icons/add-icon.svg';
import BackIcon from 'assets/icons/back-icon.svg';
import ExpandIcon from 'assets/icons/expand-icon.svg';
import { Player } from 'components/player/player';
import { SongDescription } from 'components/song-description';
import styles from './player-section.module.scss';

type PlayerSectionType = SongIdGlobalType & {
  className?: string;
};

export const PlayerSection = ({
  playingSongId,
  setPlayingSongId,
  isSongPlaying,
  setIsSongPlaying,
  className,
}: PlayerSectionType) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [audioSrc, setAudioSrc] = useState('');
  const [songDetails, setSongDetails] = useState<SongDetailsType>();
  const [songPoster, setSongPoster] = useState('');
  const { data } = useSongInfo(playingSongId);

  const [isLooped, setIsLooped] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setAudioSrc(data.songSrc);
    setSongDetails(data.details);
    if (data.poster) setSongPoster(data.poster);
  }, [audioSrc, data, playingSongId]);

  const nextSongHandler = () => {
    setPlayingSongId((prevSongId: number) => prevSongId + 1);
  };

  const prevSongHandler = () => {
    setPlayingSongId((prevSongId: number) => prevSongId - 1);
  };

  return (
    <div
      className={clsx(
        styles.wrapper,
        isExpanded && styles.wrapperExpanded,
        className
      )}
    >
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
      <SongDescription
        title={songDetails?.title}
        author={songDetails?.author}
        isExpanded={isExpanded}
        posterSrc={songPoster}
      />
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
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
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
