import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import { postSongToPlaylist } from 'utils/Axios';
import { ALL_CHAR_REGEXP } from 'utils/regexps';
import styles from './create-playlist-modal.module.scss';

type AddSongsToPlaylistValue = {
  playlistId: number;
};

type AddSongToPlaylistModalProps = {
  songId: number;
  isVisible: boolean;
  setModalVisibility: (newState: boolean) => void;
};

export const AddSongToPlaylistModal = ({
  songId,
  isVisible = false,
  setModalVisibility,
}: AddSongToPlaylistModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddSongsToPlaylistValue>();

  const onSubmit = async ({ playlistId }: AddSongsToPlaylistValue) => {
    await postSongToPlaylist(songId, playlistId)
      .then(() => {
        toast.success('Added song to playlist');
        setModalVisibility(false);
      })
      .catch(() => {
        toast.error("Can't create this playlist now.");
      });
  };

  return (
    <div
      className={clsx(
        styles.addSongWrapper,
        isVisible && styles.addSongWrapperVisible
      )}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Playlist name"
            className={styles.input}
            {...register('playlistId', {
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
              {errors.playlistId?.message?.toString()}
            </p>
          )}
        </div>
        <button type="submit">Add song to playlist</button>
      </form>
    </div>
  );
};
