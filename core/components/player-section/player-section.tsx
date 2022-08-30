import { useEffect, useState } from 'react';
import clsx from 'clsx';
import AddIcon from 'assets/icons/add-icon.svg';
import BackIcon from 'assets/icons/back-icon.svg';
import { Player } from 'components/player/player';
import getSongSrc from 'utils/getSongSrc';
import styles from './player-section.module.scss';

type PlayerSectionProps = {
  title?: string;
  author?: string;
  cover?: string | React.ReactNode;
};

export const PlayerSection = ({
  title = 'title',
  author = 'author',
  cover = 'cover',
}: PlayerSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [audioSrc, setAudioSrc] = useState('');

  useEffect(() => {
    const song = getSongSrc();
    setAudioSrc(song.song);
  }, [audioSrc]);

  return (
    <div className={clsx(styles.wrapper, isExpanded && styles.wrapperExpanded)}>
      <button
        type="button"
        className={clsx(
          styles.expandButtonInvisible,
          isExpanded && styles.expandButtonInvisibleExpanded
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
            <BackIcon />
          </button>
          <button className={styles.addButton} type="button">
            ADD
            <AddIcon />
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
      <Player
        className={styles.playerWrapper}
        audioSrc={audioSrc}
        expanded={isExpanded}
      />
      <button
        type="button"
        className={clsx(
          styles.expandButton,
          isExpanded && styles.expandButtonExpanded
        )}
        onClick={() => setIsExpanded(true)}
      >
        expand btn
      </button>
    </div>
  );
};
