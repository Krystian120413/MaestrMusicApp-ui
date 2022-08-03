import type { NextPage } from 'next';
import { ContentWrapper } from 'components/global-wrapper';
import { MainView } from 'components/main-view';

const Home: NextPage = () => {
  return (
    <ContentWrapper>
      <MainView />
    </ContentWrapper>
  );
};

export default Home;
