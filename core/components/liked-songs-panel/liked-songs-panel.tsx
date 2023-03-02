import { useEffect } from 'react';
import clsx from 'clsx';
import { useUserLikedSongs } from 'hooks/useUserLikedSongs';
import { SongIdGlobalType } from 'types/song-info-type';
import { PlaylistPanel } from 'components/playlist-panel/playlist-panel';
import styles from './liked-songs-panel.module.scss';

type LikedSongsPanelProps = SongIdGlobalType & {
  className?: string;
  setPrevNextSongs: React.Dispatch<React.SetStateAction<number[]>>;
};

export const LikedSongsPanel = ({
  className,
  playingSongId,
  setPlayingSongId,
  isSongPlaying,
  setIsSongPlaying,
  setPrevNextSongs,
}: LikedSongsPanelProps) => {
  const { likedSongs } = useUserLikedSongs();

  useEffect(() => {
    setPrevNextSongs(likedSongs.map((song) => song.songId));
  }, [setPrevNextSongs, likedSongs]);

  return (
    <div className={clsx(styles.likedWrapper, className)}>
      <PlaylistPanel
        songs={likedSongs}
        playingSongId={playingSongId}
        setPlayingSongId={setPlayingSongId}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
      />
    </div>
  );
};
