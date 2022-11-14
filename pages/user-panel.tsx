import { useState } from 'react';
import type { NextPage } from 'next';
import { ContentWrapper } from 'components/content-wrapper';
import { PlayerSection } from 'components/player-section';
import { Tabs } from 'components/tabs';
import { UserNav } from 'components/user-nav';

const UserPanel: NextPage = () => {
  const [songId, setSongId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const content = [
    <UserNav />,
    <Tabs
      playingSongId={songId}
      setPlayingSongId={setSongId}
      isSongPlaying={isPlaying}
      setIsSongPlaying={setIsPlaying}
    />,
    <PlayerSection
      playingSongId={songId}
      setPlayingSongId={setSongId}
      isSongPlaying={isPlaying}
      setIsSongPlaying={setIsPlaying}
    />,
  ];

  return (
    <>
      {content.map((item) => (
        <ContentWrapper key={item.type}>{item}</ContentWrapper>
      ))}
    </>
  );
};

export default UserPanel;
