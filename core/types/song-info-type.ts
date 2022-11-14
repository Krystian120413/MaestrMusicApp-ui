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
  id: number;
  title?: string;
  author?: string;
  posterSrc?: string;
  duration?: string;
  genres?: string[];
};

export type SongIdGlobalType = {
  playingSongId: number;
  setPlayingSongId: (id: number | ((prevSongId: number) => number)) => void;
  isSongPlaying: boolean;
  setIsSongPlaying: (
    isPlaying: boolean | ((prevState: boolean) => boolean)
  ) => void;
};
