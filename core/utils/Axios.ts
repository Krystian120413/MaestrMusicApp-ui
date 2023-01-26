import { ApiUrl } from 'helpers/constants/ApiUrl';
import instanceAxios from 'services/api';
import TokenService from 'services/token/service';
import {
  PlaylistDataType,
  PlaylistInfoType,
  SongDetailsType,
  SongType,
} from 'types/song-info-type';

const SongApiUrl = `${ApiUrl}/songs`;
const PlaylistApiUrl = `${ApiUrl}/playlists`;
const RecomendedApiUrl = `${ApiUrl}/recommended`;

export const getAllSongs = async () => {
  const response = await instanceAxios.get<SongType[]>(`${SongApiUrl}`);
  return response.data;
};

export const getSongSrc = (songId: number) => {
  return `${SongApiUrl}/${songId}/${TokenService.getUser().userId}`;
};

export const getSongInfo = async (songId: number) => {
  const response = await instanceAxios.get<SongDetailsType>(
    `${SongApiUrl}-info/${songId}`
  );

  return response.data;
};

export const getRecommendedSongs = async () => {
  const response = await instanceAxios.get<SongType[]>(
    `${SongApiUrl}/${RecomendedApiUrl}/${TokenService.getUser().userId}`
  );

  return response.data;
};

export const getUserPlaylists = async () => {
  const response = await instanceAxios.get<PlaylistDataType[]>(
    `${PlaylistApiUrl}/users/${TokenService.getUser().userId}`
  );

  return response.data;
};

export const getPlaylistInfo = async (playlistId: number) => {
  const response = await instanceAxios.get<PlaylistInfoType>(
    `${PlaylistApiUrl}/${playlistId}`
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
