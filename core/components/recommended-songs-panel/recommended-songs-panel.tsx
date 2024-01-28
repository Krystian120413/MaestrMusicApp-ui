import clsx from 'clsx';
import { useRecommended } from 'hooks/useRecommended';
import { SongIdGlobalType } from 'types/song-info-type';
import { PlaylistPanel } from 'components/playlist-panel';
import styles from './recommended-songs-panel.module.scss';

type RecommendedSongsPanelProps = SongIdGlobalType & { className?: string };

export const RecommendedSongsPanel = ({
  className,
  playingSongId,
  setPlayingSongId,
  isSongPlaying,
  setIsSongPlaying,
}: RecommendedSongsPanelProps) => {
  const { recommendedSongs } = useRecommended();

  return (
    <div className={clsx(styles.recommendedWrapper, className)}>
      <PlaylistPanel
        songs={recommendedSongs}
        playingSongId={playingSongId}
        setPlayingSongId={setPlayingSongId}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
      />
    </div>
  );
};
