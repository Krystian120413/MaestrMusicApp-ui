import Image from 'next/image';
import logoSmall from 'assets/images/logo_maestr_small.png';
import styles from './default-layout.module.scss';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <header>
        <Image src={logoSmall} alt="logo" />
        <h1>MAESTR</h1>
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
};
