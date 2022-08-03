import type { AppProps } from 'next/app';
import { DefaultLayout } from 'components/default-layout';
import 'styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
};

export default MyApp;
