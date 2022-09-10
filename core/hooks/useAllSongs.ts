import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { SongType } from 'types/song-info-type';
import { getAllSongs } from 'utils/Axios';

export const useAllSongs = () => {
  const [allSongs, setAllSongs] = useState<SongType[]>();

  const getAnswer = async () => {
    try {
      const data = await getAllSongs();
      setAllSongs(data);
    } catch (error) {
      toast.error('Something went wrong during get_all_song');
    }
  };

  useEffect(() => {
    getAnswer();
  }, []);

  return { allSongs };
};
