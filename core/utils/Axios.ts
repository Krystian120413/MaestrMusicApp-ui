import { ApiUrl } from 'helpers/constants/ApiUrl';
import instanceAxios from 'services/api';
import TokenService from 'services/token/service';
import {
  PlaylistDataType,
  PlaylistInfoType,
  PlaylistsType,
  SongDetailsType,
  SongType,
} from 'types/song-info-type';

const SongApiUrl = `${ApiUrl}/songs`;
const PlaylistsApiUrl = `${ApiUrl}/playlists`;
const RecomendedApiUrl = `${ApiUrl}/recommended`;
const PlaylistApiUrl = `${ApiUrl}/playlist`;

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
    `${RecomendedApiUrl}/${TokenService.getUser().userId}`
  );

  return response.data;
};

export const getUserPlaylists = async () => {
  const response = await instanceAxios.get<PlaylistsType>(
    `${PlaylistsApiUrl}/users/${TokenService.getUser().userId}`
  );

  return response.data;
};

export const postNewPlaylist = async (playlistName: string) => {
  await instanceAxios.post<PlaylistDataType[]>(`${PlaylistsApiUrl}`, {
    playlistName,
    userId: TokenService.getUser().userId,
  });
};

export const postSongToPlaylist = async (
  songId: number,
  playlistId: number
) => {
  await instanceAxios.post(`${PlaylistApiUrl}/song`, {
    songId,
    playlistId,
  });
};

export const deleteSongFromPlaylist = async (
  songId: number,
  playlistId: number
) => {
  await instanceAxios.delete(`${PlaylistApiUrl}/song`, {
    data: {
      songId,
      playlistId,
    },
  });
};

export const deletePlaylist = async (playlistId: number) => {
  await instanceAxios.delete(`${PlaylistsApiUrl}/${playlistId}`);
};

export const getPlaylistInfo = async (playlistId: number) => {
  const response = await instanceAxios.get<PlaylistInfoType>(
    `${PlaylistsApiUrl}/${playlistId}`
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
