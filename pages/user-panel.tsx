import type { NextPage } from 'next';
import { ContentWrapper } from 'components/content-wrapper';
import { Tabs } from 'components/tabs';

const UserPanel: NextPage = () => {
  return (
    <ContentWrapper>
      <Tabs />
    </ContentWrapper>
  );
};

export default UserPanel;
