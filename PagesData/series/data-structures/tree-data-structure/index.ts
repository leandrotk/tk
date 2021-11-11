export { Article } from './Article';

const tags = [
  {
    href: '/tags/algorithms-and-data-structures',
    name: 'algorithms_and_data_structures',
  },
  {
    href: '/tags/python',
    name: 'python',
  },
];

const coverImage = {
  src: '/series/data-structures/trees.jpeg',
  width: '592',
  height: '592',
  alt: 'A tree on the top and a house on the bottom cover by trees',
  authorHref: 'https://leandrotk.github.io',
  authorName: 'TK',
};

export const pageData = {
  title: 'Tree Data Structure',
  description: 'Solving algorithms problems with TK',
  date: '2020-02-02',
  tags,
  coverImage,
};
