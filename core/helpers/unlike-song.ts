import { toast } from 'react-toastify';
import { deleteSongFromPlaylist, getUserPlaylists } from 'utils/Axios';

export const unlikeSong = async (songId: number) => {
  try {
    const { liked } = await getUserPlaylists();
    await deleteSongFromPlaylist(songId, liked);
  } catch (error) {
    toast.error(
      "We can't delete song from the playlist. Please try again later"
    );
  }
};
