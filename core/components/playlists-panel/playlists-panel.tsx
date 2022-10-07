import { useState } from 'react';
import { TabColor } from 'types/tab-type';
import BackIcon from 'assets/icons/back-icon.svg';
import {
  PlaylistPanel,
  SongType,
} from 'components/playlist-panel/playlist-panel';
import { Tab } from 'components/tab';
import styles from './playlists-panel.module.scss';

type PlaylistTabType = {
  title: string;
  backgroundColor?: string | TabColor;
  playlistId: number;
};

const playlists: PlaylistTabType[] = [
  {
    title: 'Dobra Muzyka',
    backgroundColor: TabColor.DARK_ORANGE,
    playlistId: 0,
  },
  {
    title: 'Electro Swing',
    backgroundColor: TabColor.GREEN,
    playlistId: 1,
  },
];

const songs: SongType[][] = [
  [
    {
      title: 'Dobra muzyka 1',
      author: 'wykonawca',
      posterSrc: 'aleCo',
      duration: '21:37',
    },
    {
      title: 'Dobra muzyka 2',
      author: 'wykonawca',
      posterSrc: 'aleCo',
      duration: '21:37',
    },
  ],
  [
    {
      title: 'Electro Swing 1',
      author: 'wykonawca',
      posterSrc: 'aleCo',
      duration: '21:37',
    },
    {
      title: 'Electro Swing 2',
      author: 'wykonawca',
      posterSrc: 'aleCo',
      duration: '21:37',
    },
  ],
];

export const PlaylistsPanel = () => {
  const [actualOpenedPlaylist, setActualOepenedPlaylist] =
    useState<React.ReactNode>('');

  return (
    <div className={styles.playlistsWrapper}>
      {playlists.map(({ title, backgroundColor }, index) => (
        <Tab
          key={title}
          title={title}
          backgroundColor={backgroundColor}
          onClick={() =>
            setActualOepenedPlaylist(
              <PlaylistPanel songs={songs[playlists[index].playlistId]} />
            )
          }
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
