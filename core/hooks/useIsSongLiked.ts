import { useEffect, useState } from 'react';
import { likeSong } from 'helpers/like-song';
import { unlikeSong } from 'helpers/unlike-song';
import { useUserLikedSongs } from './useUserLikedSongs';

export const useIsSongsLiked = (songsId: number = -1) => {
  const [isLiked, setIsLiked] = useState<boolean>(); // user
  const [isSongInLikedPlaylist, setIsSongInLikedPlaylist] = useState<boolean>(); // app
  const { likedSongs } = useUserLikedSongs();

  useEffect(() => {
    if (songsId > 0) {
      const isInLiked = likedSongs.map((song) => song.songId).includes(songsId);
      setIsSongInLikedPlaylist(isInLiked);

      if (isLiked) {
        setIsSongInLikedPlaylist(true);
      } else {
        setIsSongInLikedPlaylist(false);
      }

      if (isSongInLikedPlaylist) {
        likeSong(songsId);
      } else {
        unlikeSong(songsId);
      }
    }
  }, [isLiked, isSongInLikedPlaylist, likedSongs, songsId]);

  return { setIsLiked, isSongInLikedPlaylist };
};
