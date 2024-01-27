import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { PlaylistInfoType } from 'types/song-info-type';
import { getPlaylistInfo } from 'utils/Axios';

export const usePlaylistInfo = (playlistId: number) => {
  const [playlistInfo, setPlaylistInfo] = useState<PlaylistInfoType>({
    name: '',
    songs: [],
  });

  useEffect(() => {
    const getAnswer = async () => {
      try {
        if (playlistId !== 0) {
          const data = await getPlaylistInfo(playlistId);
          setPlaylistInfo(data);
        }
      } catch (error) {
        toast.warning('This playlist is empty!');
      }
    };
    getAnswer();
  }, [playlistId]);

  return { playlistInfo };
};
