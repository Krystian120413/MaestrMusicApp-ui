import { Navbar } from 'components/navbar';
import styles from './default-layout.module.scss';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.content}>{children}</main>
    </div>
  );
};
