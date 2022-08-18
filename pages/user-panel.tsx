import type { NextPage } from 'next';
import { ContentWrapper } from 'components/content-wrapper';
import { PlayerSection } from 'components/player-section';
import { Tabs } from 'components/tabs';
import { UserNav } from 'components/user-nav';

const UserPanel: NextPage = () => {
  const content = [<UserNav />, <Tabs />, <PlayerSection />];

  return (
    <>
      {content.map((item) => (
        <ContentWrapper key={item.type}>{item}</ContentWrapper>
      ))}
    </>
  );
};

export default UserPanel;
