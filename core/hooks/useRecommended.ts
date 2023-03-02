import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { SongType } from 'types/song-info-type';
import { getRecommendedSongs } from 'utils/Axios';

export const useRecommended = () => {
  const [recommendedSongs, setRecommmendedSongs] = useState<SongType[]>([]);

  useEffect(() => {
    const getAnswer = async () => {
      try {
        const data = await getRecommendedSongs();
        setRecommmendedSongs(data);
      } catch (error) {
        toast.warning(
          "We can't reccomend you anything at this time. Check this tab later"
        );
      }
    };
    getAnswer();
  }, []);

  return { recommendedSongs };
};
