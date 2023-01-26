import { useState } from 'react';
import type { NextPage } from 'next';
import { ContentWrapper } from 'components/content-wrapper';
import { PlayerSection } from 'components/player-section';
import { Tabs } from 'components/tabs';
import { UserNav } from 'components/user-nav';

const UserPanel: NextPage = () => {
  const [songId, setSongId] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [prevNextSongs, setPrevNextSongs] = useState<number[]>([0, 0]);

  const content = [
    <UserNav setPlayingSongId={setSongId} setIsSongPlaying={setIsPlaying} />,
    <Tabs
      playingSongId={songId}
      setPlayingSongId={setSongId}
      isSongPlaying={isPlaying}
      setIsSongPlaying={setIsPlaying}
      setPrevNextSongs={setPrevNextSongs}
    />,
    <PlayerSection
      playingSongId={songId}
      setPlayingSongId={setSongId}
      isSongPlaying={isPlaying}
      setIsSongPlaying={setIsPlaying}
      prevNextSongs={prevNextSongs}
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
