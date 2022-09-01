import axios from 'axios';
import { ApiUrl } from 'helpers/constants/ApiUrl';
import { SongInfoType } from 'types/song-info';

const API_URL = ApiUrl;

export const getSongSrc = (songId: number) => {
  return `${API_URL}/songs/${songId}`;
};

export const getSongInfo = async (songId: number) => {
  const response = await axios.get<SongInfoType>(
    `${API_URL}/songs/songInfo/${songId}`
  );

  return response.data;
};
