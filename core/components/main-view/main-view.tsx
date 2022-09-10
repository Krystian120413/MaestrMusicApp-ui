import { LoginForm } from 'components/login-form';
import { MainAnimation } from 'components/main-animation';
import styles from './main-view.module.scss';

export const MainView = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Welcome</h1>
      <MainAnimation />
      <LoginForm />
    </div>
  );
};
