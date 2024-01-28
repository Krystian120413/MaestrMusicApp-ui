import { useEffect } from 'react';
import clsx from 'clsx';
import { useAllSongs } from 'hooks/useAllSongs';
import { SongIdGlobalType } from 'types/song-info-type';
import { PlaylistPanel } from 'components/playlist-panel';
import styles from './all-songs-panel.module.scss';

type AllSongsPanelProps = SongIdGlobalType & {
  className?: string;
  setPrevNextSongs: React.Dispatch<React.SetStateAction<number[]>>;
};

export const AllSongsPanel = ({
  className,
  playingSongId,
  setPlayingSongId,
  isSongPlaying,
  setIsSongPlaying,
  setPrevNextSongs,
}: AllSongsPanelProps) => {
  const { allSongs } = useAllSongs();

  useEffect(() => {
    setPrevNextSongs(allSongs.map((song) => song.songId));
  }, [setPrevNextSongs, allSongs]);

  return (
    <div className={clsx(styles.likedWrapper, className)}>
      <PlaylistPanel
        songs={allSongs}
        playingSongId={playingSongId}
        setPlayingSongId={setPlayingSongId}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
      />
    </div>
  );
};
