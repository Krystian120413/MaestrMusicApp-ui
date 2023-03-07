import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import { getSongFromToken, postGenerateToken } from 'utils/Axios';
import styles from './user-radio-view.module.scss';

type UseTokenValues = {
  sharedToken: string;
};

type UserRadioViewProps = {
  setPlayingSongId: (id: number | ((prevSongId: number) => number)) => void;
};

export const UserRadioView = ({ setPlayingSongId }: UserRadioViewProps) => {
  const [token, setToken] = useState('');
  const { register, handleSubmit } = useForm<UseTokenValues>();
  const [sharedTokenValue, setSharedTokenValue] = useState('');

  useEffect(() => {
    if (sharedTokenValue) {
      const checkInInterval = setInterval(async () => {
        const sharedSongId = await getSongFromToken(sharedTokenValue);
        setPlayingSongId(sharedSongId);
      }, 10000);

      return () => clearInterval(checkInInterval);
    }
  }, [setPlayingSongId, sharedTokenValue]);

  const onSubmit = async ({ sharedToken }: UseTokenValues) => {
    const sharedSongId = await getSongFromToken(sharedToken);
    setSharedTokenValue(sharedToken);
    setPlayingSongId(sharedSongId);
  };
  return (
    <div className={styles.radioWrapper}>
      <h2 className={styles.title}>Our Radio</h2>
      <p className={styles.paragraph}>
        Generate special token for your friends and share what you are actually
        listening
      </p>
      <button
        type="button"
        disabled={!!token}
        className={styles.button}
        onClick={async () => {
          const newToken = await postGenerateToken();
          setToken(newToken);
        }}
      >
        Generate token
      </button>
      {!!token && (
        <button
          type="button"
          className={styles.token}
          onClick={() => {
            navigator.clipboard.writeText(token);
            toast.success('Copied to clipboard');
          }}
        >
          {token}
        </button>
      )}
      <p className={clsx(styles.paragraph, styles.paragraphSecond)}>
        or place token from friend here
      </p>
      <div>
        <form className={styles.inputWrapper} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className={styles.input}
            {...register('sharedToken', { required: 'Required' })}
          />
          <button type="submit" className={styles.inputButton}>
            Listen
          </button>
        </form>
      </div>
    </div>
  );
};
