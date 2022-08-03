import Link from 'next/link';

export type SidebarItemProps = {
  link: string;
  name: string;
};

export const SidebarItem = ({ link, name }: SidebarItemProps) => {
  return (
    <div>
      <Link href={link}>{name}</Link>
    </div>
  );
};
