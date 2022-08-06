import styles from './content-wrapper.module.scss';

type ContentWrapperProps = {
  children: React.ReactNode;
};

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <div className={styles.globalWrapper}>
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
};
