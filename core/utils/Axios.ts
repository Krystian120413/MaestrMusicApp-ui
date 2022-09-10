import axios from 'axios';
import { ApiUrl } from 'helpers/constants/ApiUrl';
import { SongDetailsType, SongType } from 'types/song-info-type';

const SongApiUrl = `${ApiUrl}/songs`;

export const getAllSongs = async () => {
  const response = await axios.get<SongType[]>(`${SongApiUrl}`);
  return response.data;
};

export const getSongSrc = (songId: number) => {
  return `${SongApiUrl}/${songId}`;
};

export const getSongInfo = async (songId: number) => {
  const response = await axios.get<SongDetailsType>(
    `${SongApiUrl}-info/${songId}`
  );

  return response.data;
};

export const getSongPoster = async (songId: number) => {
  const response = await axios
    .get(`${SongApiUrl}-info/posters/${songId}`, {
      responseType: 'arraybuffer',
    })
    .then((res) => Buffer.from(res.data, 'binary').toString('base64'));

  return response;
};
