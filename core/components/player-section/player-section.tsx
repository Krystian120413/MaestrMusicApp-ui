import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useIsSongsLiked } from 'hooks/useIsSongLiked';
import { useSongInfo } from 'hooks/useSongInfo';
import { SongDetailsType, SongIdGlobalType } from 'types/song-info-type';
import AddIcon from 'assets/icons/add-icon.svg';
import BackIcon from 'assets/icons/back-icon.svg';
import ExpandIcon from 'assets/icons/expand-icon.svg';
import { AddSongToPlaylistModal } from 'components/add-song-to-playlist-modal';
import { Player } from 'components/player/player';
import { SongDescription } from 'components/song-description';
import styles from './player-section.module.scss';

type PlayerSectionType = SongIdGlobalType & {
  className?: string;
  prevNextSongs: number[];
};

export const PlayerSection = ({
  playingSongId,
  setPlayingSongId,
  isSongPlaying,
  setIsSongPlaying,
  className,
  prevNextSongs,
}: PlayerSectionType) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [audioSrc, setAudioSrc] = useState('');
  const [songDetails, setSongDetails] = useState<SongDetailsType>();
  const [songPoster, setSongPoster] = useState('');
  const { data } = useSongInfo(playingSongId);

  const { isSongInLikedPlaylist, setIsLiked } = useIsSongsLiked(playingSongId);

  const [isAddToPlaylistModalVisible, setIsAddToPlaylistModalVisible] =
    useState(false);

  useEffect(() => {
    setAudioSrc(data.songSrc);
    setSongDetails(data.details);
    if (data.poster) setSongPoster(data.poster);
  }, [audioSrc, data, playingSongId]);

  // useEffect(() => {
  //   isLiked
  // })

  const nextSongHandler = () => {
    const index = prevNextSongs?.findIndex((elem) => elem === playingSongId);

    setPlayingSongId(
      index < prevNextSongs.length - 1
        ? prevNextSongs[index + 1]
        : playingSongId
    );
  };

  const prevSongHandler = () => {
    const index = prevNextSongs?.findIndex((elem) => elem === playingSongId);
    setPlayingSongId(index > 0 ? prevNextSongs[index - 1] : playingSongId);
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
        liked={{ isLiked: isSongInLikedPlaylist, setIsLiked }}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
        openModal={setIsAddToPlaylistModalVisible}
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
      <AddSongToPlaylistModal
        songId={playingSongId}
        isVisible={isAddToPlaylistModalVisible}
        setModalVisibility={setIsAddToPlaylistModalVisible}
      />
    </div>
  );
};
