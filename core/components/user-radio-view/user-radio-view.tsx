import clsx from 'clsx';
import styles from './user-radio-view.module.scss';

export const UserRadioView = () => {
  return (
    <div className={styles.radioWrapper}>
      <h2 className={styles.title}>Our Radio</h2>
      <p className={styles.paragraph}>
        Generate special token for your friends and share what you are actually
        listening
      </p>
      <button type="button" className={styles.button}>
        Generate token
      </button>
      <p className={clsx(styles.paragraph, styles.paragraphSecond)}>
        or place token form friend here
      </p>
      <div>
        <div className={styles.inputWrapper}>
          <input type="text" className={styles.input} />
        </div>
      </div>
    </div>
  );
};
