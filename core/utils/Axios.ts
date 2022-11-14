import { ApiUrl } from 'helpers/constants/ApiUrl';
import instanceAxios from 'services/api';
import { SongDetailsType, SongType } from 'types/song-info-type';

const SongApiUrl = `${ApiUrl}/songs`;

export const getAllSongs = async () => {
  const response = await instanceAxios.get<SongType[]>(`${SongApiUrl}`);
  return response.data;
};

export const getSongSrc = (songId: number) => {
  return `${SongApiUrl}/${songId}`;
};

export const getSongInfo = async (songId: number) => {
  const response = await instanceAxios.get<SongDetailsType>(
    `${SongApiUrl}-info/${songId}`
  );

  return response.data;
};

export const getSongPoster = async (songId: number) => {
  const response = await instanceAxios
    .get(`${SongApiUrl}-info/posters/${songId}`, {
      responseType: 'arraybuffer',
    })
    .then((res) => Buffer.from(res.data, 'binary').toString('base64'));

  return response;
};
