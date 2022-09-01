import { useEffect, useState } from 'react';
import { SongDetailsType, SongInfoType } from 'types/song-info-type';
import { getSongInfo, getSongSrc } from 'utils/Axios';

export const useSongInfo = (songId: number) => {
  const [songInfo, setSongInfo] = useState<SongDetailsType>();
  const songSrc = getSongSrc(songId);

  const getAnswer = async () => {
    const songDetails = await getSongInfo(songId);
    setSongInfo(songDetails);
  };

  useEffect(() => {
    getAnswer();
  }, [songSrc]);

  const data: SongInfoType = {
    songSrc,
    details: songInfo,
  };

  return { data };
};
