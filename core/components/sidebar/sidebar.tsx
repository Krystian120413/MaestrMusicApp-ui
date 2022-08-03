import { SidebarItem, SidebarItemProps } from 'components/sidebar-item';
import styles from './sidebar.module.scss';

const sidebarItems: SidebarItemProps[] = [
  {
    link: '/home',
    name: 'Home',
  },
  {
    link: '/search',
    name: 'Search',
  },
  {
    link: '/library',
    name: 'Your library',
  },
];

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {sidebarItems.map(({ link, name }) => (
        <SidebarItem link={link} name={name} />
      ))}
    </div>
  );
};
