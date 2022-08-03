import Link from 'next/link';
import styles from './login-form.module.scss';

export const LoginForm = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <label className={styles.emailLabel} htmlFor="email">
          E-mail
        </label>
        <input
          type="email"
          className={styles.emailInput}
          id="email"
          name="email"
        />
        <label className={styles.passwdLabel} htmlFor="userPassword">
          Password
        </label>
        <input
          type="password"
          className={styles.passwdInput}
          id="userPassword"
          name="userPassword"
        />
        <button className={styles.submitBtn}>
          <Link href="/user-panel">Sign In</Link>
        </button>
      </form>
      {/* <SignInLink /> */}
    </div>
  );
};
