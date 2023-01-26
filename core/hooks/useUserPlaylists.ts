import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { PlaylistDataType } from 'types/song-info-type';
import { getUserPlaylists } from 'utils/Axios';

export const useUserPlaylists = () => {
  const [allPlaylists, setAllPlaylists] = useState<PlaylistDataType[]>([]);

  useEffect(() => {
    const getAnswer = async () => {
      try {
        const data = await getUserPlaylists();
        setAllPlaylists(data);
      } catch (error) {
        toast.error('Something went wrong during get_all_playlists');
      }
    };
    getAnswer();
  }, []);

  return { playlists: allPlaylists };
};
