import type { NextPage } from 'next';
import { ContentWrapper } from 'components/global-wrapper';
import { Sidebar } from 'components/sidebar';

const UserPanel: NextPage = () => {
  return (
    <ContentWrapper>
      <Sidebar />
    </ContentWrapper>
  );
};

export default UserPanel;
