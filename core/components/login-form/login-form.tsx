import { useForm } from 'react-hook-form';
import { useAuth } from 'helpers/authorization';
import PlayIcon from 'assets/icons/play-login-icon.svg';
import PrevIcon from 'assets/icons/prev-login-icon.svg';
import { ALL_CHAR_REGEXP, EMAIL_REGEXP } from 'utils/regexps';
import styles from './login-form.module.scss';

type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  setIsSignUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginForm = ({ setIsSignUpOpen }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>();
  const auth = useAuth();

  const onSubmit = (data: LoginValues) => {
    auth?.login(data.email, data.password);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            {...register('email', {
              pattern: {
                value: EMAIL_REGEXP,
                message: 'Invalid email address',
              },
              required: 'Required',
            })}
          />
          {!!errors && (
            <p className={styles.inputError}>
              {errors.email?.message?.toString()}
            </p>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            {...register('password', {
              pattern: ALL_CHAR_REGEXP,
              required: 'Required',
              minLength: {
                value: 8,
                message: 'Password min. length: 8',
              },
            })}
          />
          {!!errors && (
            <p className={styles.inputError}>
              {errors.password?.message?.toString()}
            </p>
          )}
        </div>
        <div className={styles.buttonWrapper}>
          <span className={styles.prev}>
            <PrevIcon />
          </span>
          <button type="submit" className={styles.submitButton}>
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
        <button
          type="button"
          className={styles.newAccountLink}
          onClick={() => setIsSignUpOpen(true)}
        >
          new account
        </button>
      </p>
      <h3 className={styles.instruction}>Click Play to LogIn</h3>
    </div>
  );
};
