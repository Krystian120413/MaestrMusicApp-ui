import clsx from 'clsx';
import { useAllSongs } from 'hooks/useAllSongs';
import { SongIdGlobalType } from 'types/song-info-type';
import { PlaylistPanel } from 'components/playlist-panel/playlist-panel';
import styles from './liked-songs-panel.module.scss';

type LikedSongsPanelProps = SongIdGlobalType & { className?: string };

export const LikedSongsPanel = ({
  className,
  playingSongId,
  setPlayingSongId,
  isSongPlaying,
  setIsSongPlaying,
}: LikedSongsPanelProps) => {
  const { allSongs } = useAllSongs();

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
