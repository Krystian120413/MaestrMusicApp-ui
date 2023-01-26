import { useEffect, useState } from 'react';
import { usePlaylistInfo } from 'hooks/usePlaylistInfo';
import { PlaylistInfoType, SongIdGlobalType } from 'types/song-info-type';
import { TabColor } from 'types/tab-type';
import BackIcon from 'assets/icons/back-icon.svg';
import { PlaylistPanel } from 'components/playlist-panel/playlist-panel';
import { Tab } from 'components/tab';
import styles from './playlists-panel.module.scss';

export type PlaylistTabType = {
  title: string;
  backgroundColor?: string | TabColor;
  playlistId: number;
};
type PlaylistsPanelProps = SongIdGlobalType & {
  tabs?: PlaylistTabType[];
};

export const PlaylistsPanel = ({
  isSongPlaying,
  setIsSongPlaying,
  playingSongId,
  setPlayingSongId,
  tabs,
}: PlaylistsPanelProps) => {
  const [actualOpenedPlaylist, setActualOepenedPlaylist] =
    useState<React.ReactNode>('');
  const [actualOpenedPlaylistIndex, setActualOepenedPlaylistIndex] =
    useState(0);
  const { playlistInfo } = usePlaylistInfo(actualOpenedPlaylistIndex);
  const [playlistInfoState, setPlaylistInfoState] =
    useState<PlaylistInfoType>(playlistInfo);

  useEffect(() => {
    setPlaylistInfoState(playlistInfo);
  }, [playingSongId, playlistInfo]);

  return (
    <div className={styles.playlistsWrapper}>
      {tabs?.map(({ title, backgroundColor, playlistId }) => (
        <Tab
          className={styles.playlistsCover}
          key={title}
          title={title}
          backgroundColor={backgroundColor}
          onClick={() => {
            setActualOepenedPlaylistIndex(playlistId);
            setActualOepenedPlaylist(
              <PlaylistPanel
                songs={playlistInfoState?.songs}
                isSongPlaying={isSongPlaying}
                playingSongId={playingSongId}
                setPlayingSongId={setPlayingSongId}
                setIsSongPlaying={setIsSongPlaying}
              />
            );
          }}
        />
      ))}
      {actualOpenedPlaylist !== '' && (
        <div className={styles.openedPlaylist}>
          <button
            className={styles.openedPlaylistBackButton}
            type="button"
            onClick={() => setActualOepenedPlaylist('')}
          >
            BACK
            <BackIcon />
          </button>
          {actualOpenedPlaylist}
        </div>
      )}
    </div>
  );
};
