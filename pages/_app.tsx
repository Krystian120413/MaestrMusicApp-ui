import { ToastContainer } from 'react-toastify';
import { AuthProvider } from 'helpers/authorization';
import { DefaultLayout } from 'helpers/default-layout';
import type { AppProps } from 'next/app';
import 'styles/global.scss';

import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default MyApp;
