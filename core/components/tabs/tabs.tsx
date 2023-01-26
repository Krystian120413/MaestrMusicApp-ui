import React, { useState } from 'react';
import clsx from 'clsx';
import { useUserPlaylists } from 'hooks/useUserPlaylists';
import { SongIdGlobalType } from 'types/song-info-type';
import { TabColor } from 'types/tab-type';
import BackIcon from 'assets/icons/back-icon.svg';
import { LikedSongsPanel } from 'components/liked-songs-panel';
import { PlaylistsPanel, PlaylistTabType } from 'components/playlists-panel';
import { RecommendedSongsPanel } from 'components/recommended-songs-panel';
import { Tab } from 'components/tab/tab';
import { UserRadioView } from 'components/user-radio-view';
import styles from './tabs.module.scss';

type TabsProps = SongIdGlobalType & {
  styleClassName?: string;
  setPrevNextSongs: React.Dispatch<React.SetStateAction<number[]>>;
};

const genres: PlaylistTabType[] = [
  {
    title: 'Rock',
    backgroundColor: TabColor.DARK_ORANGE,
    playlistId: 0,
  },
  {
    title: 'Pop',
    backgroundColor: TabColor.GREEN,
    playlistId: 1,
  },
];

export const Tabs = ({
  playingSongId,
  setPlayingSongId,
  styleClassName,
  isSongPlaying,
  setIsSongPlaying,
  setPrevNextSongs,
}: TabsProps) => {
  const [actualOpenedTab, setActualOepenedTab] = useState<React.ReactNode>('');
  const { playlists } = useUserPlaylists();

  const playlistsWithColor: PlaylistTabType[] = playlists.map(
    ({ name, playlistId }) => ({
      title: name,
      playlistId,
      backgroundColor: TabColor.GREEN,
    })
  );

  const tabs = [
    {
      title: 'PLAYLISTS',
      backgroundColor: TabColor.DARK_ORANGE,
      className: styles.playlists,
      component: (
        <PlaylistsPanel
          isSongPlaying={isSongPlaying}
          playingSongId={playingSongId}
          setPlayingSongId={setPlayingSongId}
          setIsSongPlaying={setIsSongPlaying}
          tabs={playlistsWithColor}
        />
      ),
    },
    {
      title: 'LIKED',
      backgroundColor: TabColor.GREEN,
      className: styles.liked,
      component: (
        <LikedSongsPanel
          playingSongId={playingSongId}
          setPlayingSongId={setPlayingSongId}
          isSongPlaying={isSongPlaying}
          setIsSongPlaying={setIsSongPlaying}
          setPrevNextSongs={setPrevNextSongs}
        />
      ),
    },
    {
      title: 'GENRES',
      backgroundColor: TabColor.LIGHT_GREEN,
      className: styles.genres,
      component: (
        <PlaylistsPanel
          isSongPlaying={isSongPlaying}
          playingSongId={playingSongId}
          setPlayingSongId={setPlayingSongId}
          setIsSongPlaying={setIsSongPlaying}
          tabs={genres}
        />
      ),
    },
    {
      title: 'RECOMMENDED',
      backgroundColor: TabColor.RED,
      className: styles.recommended,
      component: (
        <RecommendedSongsPanel
          playingSongId={playingSongId}
          setPlayingSongId={setPlayingSongId}
          isSongPlaying={isSongPlaying}
          setIsSongPlaying={setIsSongPlaying}
        />
      ),
    },
    {
      title: 'USER RADIO',
      backgroundColor: TabColor.ORANGE,
      className: styles.userRadio,
      component: <UserRadioView />,
    },
  ];

  return (
    <div className={clsx(styles.wrapper, styleClassName)}>
      {tabs.map(({ title, backgroundColor, className, component }) => (
        <Tab
          key={title}
          className={className}
          title={title}
          backgroundColor={backgroundColor}
          onClick={() => setActualOepenedTab(component)}
        />
      ))}
      {actualOpenedTab !== '' && (
        <div className={styles.openedTab}>
          <button
            className={styles.openedTabBackButton}
            type="button"
            onClick={() => setActualOepenedTab('')}
          >
            BACK
            <BackIcon />
          </button>
          {actualOpenedTab}
        </div>
      )}
    </div>
  );
};
