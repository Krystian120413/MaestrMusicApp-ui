export type SongDetailsType = {
  title: string;
  author: string;
};

export type SongInfoType = {
  songSrc: string;
  details?: SongDetailsType;
  poster?: string;
};
