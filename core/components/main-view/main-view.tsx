import { LoginForm } from 'components/login-form';
import { MainAnimation } from 'components/main-animation';
import styles from './main-view.module.scss';

export const MainView = () => {
  return (
    <div className={styles.wrapper}>
      <MainAnimation />
      <LoginForm />
    </div>
  );
};
