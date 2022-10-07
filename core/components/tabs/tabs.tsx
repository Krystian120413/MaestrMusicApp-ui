import React, { useState } from 'react';
import { TabColor } from 'types/tab-type';
import BackIcon from 'assets/icons/back-icon.svg';
import { LikedSongsPanel } from 'components/liked-songs-panel';
import { PlaylistsPanel } from 'components/playlists-panel';
import { Tab } from 'components/tab/tab';
import styles from './tabs.module.scss';

const tabs = [
  {
    title: 'PLAYLISTS',
    backgroundColor: TabColor.DARK_ORANGE,
    className: styles.playlists,
    component: <PlaylistsPanel />,
  },
  {
    title: 'LIKED',
    backgroundColor: TabColor.GREEN,
    className: styles.liked,
    component: <LikedSongsPanel />,
  },
  {
    title: 'GENRES',
    backgroundColor: TabColor.LIGHT_GREEN,
    className: styles.genres,
    component: 'genres',
  },
  {
    title: 'RECOMMENDED',
    backgroundColor: TabColor.RED,
    className: styles.recommended,
    component: 'recomm',
  },
  {
    title: 'USER RADIO',
    backgroundColor: TabColor.ORANGE,
    className: styles.userRadio,
    component: 'radio',
  },
];

export const Tabs = () => {
  const [actualOpenedTab, setActualOepenedTab] = useState<React.ReactNode>('');

  return (
    <div className={styles.wrapper}>
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
