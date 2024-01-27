export type SongDetailsType = {
  title: string;
  author: string;
};

export type SongInfoType = {
  songSrc: string;
  details?: SongDetailsType;
  poster?: string;
};

export type SongType = {
  songId: number;
  title?: string;
  author?: string;
  posterSrc?: string;
  duration?: number;
  genres?: string[];
};

export type PlaylistDataType = {
  name: string;
  playlistId: number;
};

export type PlaylistsType = {
  playlists: PlaylistDataType[];
  liked: number;
};

export type PlaylistInfoType = {
  name: string;
  songs: SongType[];
};

export type SongIdGlobalType = {
  playingSongId: number;
  setPlayingSongId: (id: number | ((prevSongId: number) => number)) => void;
  isSongPlaying: boolean;
  setIsSongPlaying: (
    isPlaying: boolean | ((prevState: boolean) => boolean)
  ) => void;
};
