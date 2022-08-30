import { toast } from 'react-toastify';
import axios from 'axios';
import { ApiUrl } from 'helpers/constants/ApiUrl';

const API_URL = ApiUrl;

const getSongSrc = () => {
  // const response = await axios.get(`${API_URL}song[id]`)

  // return response.data;

  const songInfo = axios.get(`${API_URL}song-info`).catch(() => {
    toast.error('Some error occured during geting song');
  });

  const song = {
    song: `${API_URL}song`,
    songInfo,
  };

  return song;
};

export default getSongSrc;
