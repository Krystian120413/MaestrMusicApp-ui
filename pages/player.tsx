import type { NextPage } from 'next';
import { ContentWrapper } from 'components/content-wrapper';
import { MainView } from 'components/main-view';

const Player: NextPage = () => {
  return (
    <ContentWrapper>
      <MainView />
    </ContentWrapper>
  );
};

export default Player;
