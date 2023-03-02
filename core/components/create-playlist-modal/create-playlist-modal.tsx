import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import { postNewPlaylist } from 'utils/Axios';
import { ALL_CHAR_REGEXP } from 'utils/regexps';
import styles from './create-playlist-modal.module.scss';

type CreatePlaylistValue = {
  name: string;
};

type CreatePlaylistModalProps = {
  isVisible: boolean;
  setModalVisibility: (newState: boolean) => void;
};

export const CreatePlaylistModal = ({
  isVisible = false,
  setModalVisibility,
}: CreatePlaylistModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePlaylistValue>();

  const onSubmit = async ({ name }: CreatePlaylistValue) => {
    await postNewPlaylist(name)
      .then(() => {
        toast.success(`Created playlist ${name}`);
        setModalVisibility(false);
      })
      .catch(() => {
        toast.error("Can't create this playlist now.");
      });
  };

  return (
    <div
      className={clsx(
        styles.createPlaylistWrapper,
        isVisible && styles.createPlaylistWrapperVisible
      )}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Playlist name"
            className={styles.input}
            {...register('name', {
              pattern: ALL_CHAR_REGEXP,
              required: 'Required',
              minLength: {
                value: 2,
                message: 'Playlist name min. length: 2',
              },
              maxLength: {
                value: 120,
                message: 'Playlist name max length: 120',
              },
            })}
          />
          {!!errors && (
            <p className={styles.inputError}>
              {errors.name?.message?.toString()}
            </p>
          )}
        </div>
        <button type="submit">Add new playlist</button>
      </form>
    </div>
  );
};
