import { useState } from 'react';
import clsx from 'clsx';
import { Player } from 'components/player/player';
import styles from './player-section.module.scss';

type PlayerSectionProps = {
  title?: string;
  author?: string;
  cover?: string | React.ReactNode;
  audioSrc?: string;
  duration?: number;
};

export const PlayerSection = ({
  title = 'title',
  author = 'author',
  cover = 'cover',
  audioSrc,
  duration = 0,
}: PlayerSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={clsx(styles.wrapper, isExpanded && styles.wrapperExpanded)}>
      <button
        type="button"
        className={clsx(
          styles.expandButton,
          isExpanded && styles.expandButtonExpanded
        )}
        onClick={() => setIsExpanded(true)}
      >
        expand button
      </button>
      {isExpanded && (
        <div className={styles.navigationButtons}>
          <button
            className={styles.backButton}
            type="button"
            onClick={() => setIsExpanded(false)}
          >
            BACK
          </button>
          <button className={styles.addButton} type="button">
            ADD
          </button>
        </div>
      )}
      <div
        className={clsx(
          styles.songDescriptionWrapper,
          isExpanded && styles.songDescriptionWrapperExpanded
        )}
      >
        <div className={clsx(styles.cover, isExpanded && styles.coverExpanded)}>
          {cover}
        </div>
        <div className={clsx(styles.title, isExpanded && styles.titleExpanded)}>
          {title}
        </div>
        <div
          className={clsx(styles.author, isExpanded && styles.authorExpanded)}
        >
          {author}
        </div>
      </div>
      <div className={styles.rangeWrapper}>input range</div>
      <Player
        className={styles.playerWrapper}
        audioSrc={audioSrc}
        duration={duration}
        expanded={isExpanded}
      />
    </div>
  );
};
