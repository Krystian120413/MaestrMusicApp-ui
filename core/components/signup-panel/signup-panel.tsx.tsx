import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuth } from 'helpers/authorization';
import { ALL_CHAR_REGEXP, EMAIL_REGEXP } from 'utils/regexps';
import styles from './signup-panel.module.scss';

type SignUpPanelProps = {
  setIsSignUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type SignUpValues = {
  name: string;
  surname: string;
  emails: string;
  passwords: string;
  password2s: string;
};

export const SignUpPanel = ({ setIsSignUpOpen }: SignUpPanelProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>();
  const auth = useAuth();

  const onSubmit = ({
    name,
    surname,
    emails,
    passwords,
    password2s,
  }: SignUpValues) => {
    if (password2s === passwords) {
      auth?.signUp(name, surname, emails, passwords);
    } else {
      toast.warning('Passwords are not the same');
    }
  };

  return (
    <div className={styles.signupWrapper}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setIsSignUpOpen(false)}
      >
        back
      </button>
      <h2 className={styles.title}>Create account in our service</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            {...register('name', {
              pattern: {
                value: ALL_CHAR_REGEXP,
                message: 'Invalid name',
              },
              required: 'Required',
            })}
          />
          {!!errors && (
            <p className={styles.inputError}>
              {errors.name?.message?.toString()}
            </p>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            placeholder="Surname"
            {...register('surname', {
              pattern: {
                value: ALL_CHAR_REGEXP,
                message: 'Invalid surname',
              },
              required: 'Required',
            })}
          />
          {!!errors && (
            <p className={styles.inputError}>
              {errors.surname?.message?.toString()}
            </p>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            {...register('emails', {
              pattern: {
                value: EMAIL_REGEXP,
                message: 'Invalid email address',
              },
              required: 'Required',
            })}
          />
          {!!errors && (
            <p className={styles.inputError}>
              {errors.emails?.message?.toString()}
            </p>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            {...register('passwords', {
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
              {errors.passwords?.message?.toString()}
            </p>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="password"
            placeholder="Repeat password"
            {...register('password2s', {
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
              {errors.password2s?.message?.toString()}
            </p>
          )}
        </div>
        <button type="submit" className={styles.button}>
          SignUp
        </button>
      </form>
    </div>
  );
};
