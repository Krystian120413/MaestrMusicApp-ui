import { SongIdGlobalType, SongType } from 'types/song-info-type';
import { SongInList } from 'components/song-in-list';
import styles from './playlist-panel.module.scss';

type PlaylistPanelProps = SongIdGlobalType & {
  songs: SongType[];
};

export const PlaylistPanel = ({
  songs,
  playingSongId,
  setPlayingSongId,
  isSongPlaying,
  setIsSongPlaying,
}: PlaylistPanelProps) => {
  return (
    <div className={styles.playlistWrapper}>
      {songs.map(({ title, author, duration, id }, index) => (
        <SongInList
          key={title}
          songId={id}
          index={index + 1}
          title={title}
          author={author}
          duration="02:37"
          isSongPlaying={isSongPlaying}
          playingSongId={playingSongId}
          setPlayingSongId={setPlayingSongId}
          setIsSongPlaying={setIsSongPlaying}
        />
      ))}
    </div>
  );
};
