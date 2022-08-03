import Image from 'next/image';
import logoSmall from 'assets/images/logo_maestr_small.png';
import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarImage}>
        <Image src={logoSmall} alt="logo" />
      </div>
      <h1 className={styles.navbarHeading}>MAESTR</h1>
    </nav>
  );
};
