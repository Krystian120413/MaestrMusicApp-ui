import { ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app';
import { DefaultLayout } from 'components/default-layout';
import 'styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <DefaultLayout>
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
      <Component {...pageProps} />
      <ToastContainer />
    </DefaultLayout>
  );
};

export default MyApp;
