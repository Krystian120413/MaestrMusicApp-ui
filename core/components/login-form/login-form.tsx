import Link from 'next/link';
import PlayIcon from 'assets/icons/play-login-icon.svg';
import PrevIcon from 'assets/icons/prev-login-icon.svg';
import styles from './login-form.module.scss';

export const LoginForm = () => {
  return (
    <div className={styles.wrapper}>
      <form action="/auth" className={styles.form}>
        <input
          type="email"
          className={styles.input}
          id="email"
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          className={styles.input}
          id="userPassword"
          name="userPassword"
          placeholder="Password"
        />
        <div className={styles.buttonWrapper}>
          <span className={styles.prev}>
            <PrevIcon />
          </span>
          <button className={styles.submitButton}>
            icon
            <PlayIcon />
          </button>
          <span className={styles.next}>
            <PrevIcon className={styles.nextIcon} />
          </span>
        </div>
      </form>
      <p className={styles.newAccountParagraph}>
        Create a{' '}
        <Link href="/user-panel">
          <a className={styles.newAccountLink}>new account</a>
        </Link>
      </p>
      <h3 className={styles.instruction}>Click Play to LogIn</h3>
    </div>
  );
};
