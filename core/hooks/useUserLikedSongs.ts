import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { SongType } from 'types/song-info-type';
import { getPlaylistInfo, getUserPlaylists } from 'utils/Axios';

export const useUserLikedSongs = () => {
  const [likedSongs, setLikedSongs] = useState<SongType[]>([]);

  useEffect(() => {
    const getAnswer = async () => {
      try {
        const playlists = await getUserPlaylists();
        const data = await getPlaylistInfo(playlists.liked);
        setLikedSongs(data.songs);
      } catch (error) {
        toast.warning("You don't have any liked songs. Let's add some.");
      }
    };
    getAnswer();
  }, []);

  return { likedSongs };
};
