import { toast } from 'react-toastify';
import axios from 'axios';
import { ApiUrl } from 'helpers/constants/ApiUrl';

const API_URL = ApiUrl;

const getSong = () => {
  // const response = await axios.get(`${API_URL}song[id]`)

  // return response.data;

  const songId = 0;

  const getSongInfo = async () => {
    const songInfo = await axios
      .get(`${API_URL}/songs/songInfo/${songId}`)
      .then(({ data }) => data)
      .catch((error) => {
        toast.error(`Error occured: ${error.response.status}`);
      });

    songInfo();
  };

  const song = {
    song: `${API_URL}/songs/${songId}`,
    title: getSongInfo.title,
  };

  return song;
};

export default getSong;
