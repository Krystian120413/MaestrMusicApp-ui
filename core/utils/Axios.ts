import axios from 'axios';
import { ApiUrl } from 'helpers/constants/ApiUrl';
import { SongDetailsType } from 'types/song-info-type';

const SongApiUrl = `${ApiUrl}/songs`;

export const getSongSrc = (songId: number) => {
  return `${SongApiUrl}/${songId}`;
};

export const getSongInfo = async (songId: number) => {
  const response = await axios.get<SongDetailsType>(
    `${SongApiUrl}/songInfo/${songId}`
  );

  return response.data;
};
