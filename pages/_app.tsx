import { ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app';
import { DefaultLayout } from 'components/default-layout';
import 'styles/global.scss';

import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </DefaultLayout>
  );
};

export default MyApp;
