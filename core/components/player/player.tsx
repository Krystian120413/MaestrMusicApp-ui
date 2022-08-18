import clsx from 'clsx';
import styles from './player.module.scss';

type PlayerProps = {
  className?: string;
  audioSrc?: string;
  duration?: number;
  expanded: boolean;
};

export const Player = ({
  className,
  audioSrc,
  duration = 0,
  expanded,
}: PlayerProps) => {
  return (
    <div
      className={clsx(
        className,
        styles.globalWrapper,
        expanded && styles.globalWrapperExpanded
      )}
    >
      <div
        className={clsx(
          styles.rangeWrapper,
          expanded && styles.rangeWrapperExpanded
        )}
      >
        <input type="range" className={styles.range} min={0} max={duration} />
      </div>
      <div>
        {expanded && 'shuffle prev'} play {expanded && 'next like'}
      </div>
    </div>
  );
};
