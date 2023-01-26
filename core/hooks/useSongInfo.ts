import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { SongDetailsType, SongInfoType } from 'types/song-info-type';
import { getSongInfo, getSongPoster, getSongSrc } from 'utils/Axios';

export const useSongInfo = (songId: number) => {
  const [songInfo, setSongInfo] = useState<SongDetailsType>();
  const [songPoster, setSongPoster] = useState('');
  const songSrc = songId >= 0 ? getSongSrc(songId) : '';

  const getAnswer = async () => {
    if (songId < 0) {
      setSongInfo({ title: '', author: '' });
      setSongPoster('');
    } else {
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
