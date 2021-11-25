export { Article } from './Article';

const tags = [
  {
    href: '/tags/web-development',
    name: 'web_development',
  },
  {
    href: '/tags/typescript',
    name: 'typescript',
  },
  {
    href: '/tags/javascript',
    name: 'javascript',
  },
];

const coverImage = {
  src: '/series/rebuilding-mercaris-search/house.jpg',
  width: '592',
  height: '394',
  alt: 'house',
  authorHref: 'https://unsplash.com/@insolitus',
  authorName: 'Rowan Heuvel',
};

export const pageData = {
  title:
    "Rebuilding Mercari's Search: Setup NextJS with TypeScript, Prettier, and Jest",
  description:
    "Setting up the project with NextJS, TypeScript, Prettier, and Jest to rebuild the Mercari's Search.",
  date: '2021-06-20',
  tags,
  coverImage,
};
