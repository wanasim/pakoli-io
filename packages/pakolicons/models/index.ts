import { ReactNode } from 'react';

type Page = {
  name: string;
  href: string;
};

type Category = {
  id: string;
  name: string;
  featured: (Page & { imageSrc: string; imageAlt: string })[];
  sections: { id: string; name: string; items: Page[] }[];
};

export type Navigation = { categories: Category[]; pages: Page[] };

export type NavItemsProps = {
  items: Navigation;
};

export type HeaderLogoProps = {
  children: ReactNode;
};
