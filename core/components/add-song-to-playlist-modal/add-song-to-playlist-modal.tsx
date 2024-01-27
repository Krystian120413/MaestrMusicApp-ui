import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import { useUserPlaylists } from 'hooks/useUserPlaylists';
import CloseIcon from 'assets/icons/add-icon.svg';
import { postSongToPlaylist } from 'utils/Axios';
import styles from './add-song-to-playlist-modal.module.scss';

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
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddSongsToPlaylistValue>();
  const { playlists } = useUserPlaylists();
  const [userPlaylists, setUserPlaylists] =
    useState<{ value: number; label: string }[]>();

  useEffect(() => {
    const options = playlists.map((name, playlistId) => ({
      value: playlistId,
      label: name.name,
    }));

    setUserPlaylists(options);
  }, [playlists]);

  const onSubmit = async ({ playlistId }: AddSongsToPlaylistValue) => {
    await postSongToPlaylist(songId, playlistId)
      .then(() => {
        toast.success('Added song to playlist');
        setModalVisibility(false);
      })
      .catch(() => {
        toast.error("Can't add song to this playlist now.");
      });
  };

  return (
    <div
      className={clsx(
        styles.addSongWrapper,
        isVisible && styles.addSongWrapperVisible
      )}
    >
      {isVisible && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            type="button"
            className={styles.buttonClose}
            onClick={() => setModalVisibility(false)}
          >
            close <CloseIcon />
          </button>
          <div className={styles.inputWrapper}>
            <Controller
              control={control}
              name="playlistId"
              render={({ field: { value, onChange } }) => (
                <Select
                  options={userPlaylists}
                  className={styles.input}
                  value={value}
                  onChange={(val) => onChange(val.value)}
                />
              )}
            />

            {!!errors && (
              <p className={styles.inputError}>
                {errors.playlistId?.message?.toString()}
              </p>
            )}
          </div>
          <button type="submit" className={styles.button}>
            Add song to playlist
          </button>
        </form>
      )}
    </div>
  );
};
