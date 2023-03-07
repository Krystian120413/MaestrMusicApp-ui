import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { postNewPlaylist } from 'utils/Axios';
import { ALL_CHAR_REGEXP } from 'utils/regexps';
import styles from './create-playlist-modal.module.scss';

type CreatePlaylistValue = {
  name: string;
};

type CreatePlaylistModalProps = {
  isModalVisible: boolean;
  setModalVisibility: (newState: boolean) => void;
};

export const CreatePlaylistModal = ({
  isModalVisible = false,
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
    <div>
      {isModalVisible && (
        <div className={styles.createPlaylistWrapper}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.createPlaylistWrapper}
          >
            <div className={styles.inputWrapper}>
              <h3>Add new playlist</h3>
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
            <button type="submit" className={styles.button}>
              Add new playlist
            </button>
            <button
              type="button"
              className={styles.button}
              onClick={() => {
                setModalVisibility(false);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
