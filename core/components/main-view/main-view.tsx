import { useState } from 'react';
import { LoginForm } from 'components/login-form';
import { MainAnimation } from 'components/main-animation';
import { SignUpPanel } from 'components/signup-panel';
import styles from './main-view.module.scss';

export const MainView = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Welcome</h1>
      <MainAnimation />
      <LoginForm setIsSignUpOpen={setIsSignUpOpen} />
      {isSignUpOpen && <SignUpPanel setIsSignUpOpen={setIsSignUpOpen} />}
    </div>
  );
};
