import Image from 'next/image';
import Animation from 'assets/gifs/Abstract-cover-animation.gif';
import styles from './main-animation.module.scss';

export const MainAnimation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.animationWrapper}>
        <Image src={Animation} className={styles.animation} />
      </div>
    </div>
  );
};
