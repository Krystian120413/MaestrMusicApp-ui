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
  title: string;
  author: string;
  genre: string[];
};
