import clsx from 'clsx';
import Image from 'next/image';
import defaultCoverSrc from 'assets/images/default-cover.png';
import styles from './song-description.module.scss';

export type SongDescriptionType = {
  title?: string;
  author?: string;
  posterSrc?: string;
  isExpanded?: boolean;
};

export const SongDescription = ({
  title = 'title',
  author = 'author',
  posterSrc,
  isExpanded = false,
}: SongDescriptionType) => {
  return (
    <div
      className={clsx(
        styles.songDescriptionWrapper,
        isExpanded && styles.songDescriptionWrapperExpanded
      )}
    >
      <div
        className={clsx(
          styles.coverWrapper,
          isExpanded && styles.coverWrapperExpanded
        )}
      >
        <Image
          className={styles.cover}
          src={posterSrc ? `data:;base64,${posterSrc}` : defaultCoverSrc}
          width="100%"
          height="100%"
          layout="responsive"
          alt="okładka"
        />
      </div>
      <div className={clsx(styles.title, isExpanded && styles.titleExpanded)}>
        {title}
      </div>
      <div className={clsx(styles.author, isExpanded && styles.authorExpanded)}>
        {author}
      </div>
    </div>
  );
};
