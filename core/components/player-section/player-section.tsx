import { useEffect, useState } from 'react';
import clsx from 'clsx';
import AddIcon from 'assets/icons/add-icon.svg';
import BackIcon from 'assets/icons/back-icon.svg';
import ExpandIcon from 'assets/icons/expand-icon.svg';
import { Player } from 'components/player/player';
import getSong from 'utils/getSong';
import styles from './player-section.module.scss';

export const PlayerSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [audioSrc, setAudioSrc] = useState('');
  const [songInfo, setSongInfo] = useState({
    title: '',
    author: '',
  });
  const cover = '';

  useEffect(() => {
    const song = getSong();
    setAudioSrc(song.song);
    console.log(song.title);
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
          {songInfo.title}
        </div>
        <div
          className={clsx(styles.author, isExpanded && styles.authorExpanded)}
        >
          {songInfo.author}
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
        <ExpandIcon />
      </button>
    </div>
  );
};
