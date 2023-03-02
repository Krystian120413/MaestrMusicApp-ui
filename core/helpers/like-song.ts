import { toast } from 'react-toastify';
import { getUserPlaylists, postSongToPlaylist } from 'utils/Axios';

export const likeSong = async (songId: number) => {
  try {
    const { liked } = await getUserPlaylists();
    await postSongToPlaylist(songId, liked);
  } catch (error) {
    toast.error("We can't add song to the playlist. Please try again later");
  }
};
