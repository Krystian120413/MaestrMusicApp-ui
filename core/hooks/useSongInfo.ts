import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { SongDetailsType, SongInfoType } from 'types/song-info-type';
import { getSongInfo, getSongPoster, getSongSrc } from 'utils/Axios';

export const useSongInfo = (songId: number) => {
  const [songInfo, setSongInfo] = useState<SongDetailsType>();
  const songSrc = getSongSrc(songId);
  const [songPoster, setSongPoster] = useState('');

  const getAnswer = async () => {
    try {
      const songDetails = await getSongInfo(songId);
      const songCover = await getSongPoster(songId);
      setSongInfo(songDetails);
      setSongPoster(songCover);
    } catch (error) {
      toast.error('Something went wrong', {
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    getAnswer();
  }, [songSrc]);

  const data: SongInfoType = {
    songSrc,
    details: songInfo,
    poster: songPoster,
  };

  return { data };
};
