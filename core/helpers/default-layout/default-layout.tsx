import { useEffect } from 'react';
import { useAuth } from 'helpers/authorization';
import { useRouter } from 'next/router';
import styles from './default-layout.module.scss';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const router = useRouter();
  const authContext = useAuth();

  useEffect(() => {
    if (authContext?.isAuthenticated) {
      router.push('/user-panel');
    } else {
      router.push('/');
    }
  }, [authContext?.isAuthenticated, authContext]);

  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>
        {(!authContext?.isAuthenticated && router.pathname === '/') ||
        authContext?.isAuthenticated ? (
          children
        ) : (
          <>Unatorized</>
        )}
      </main>
    </div>
  );
};
