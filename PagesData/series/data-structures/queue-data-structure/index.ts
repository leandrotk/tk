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
  src: '/series/data-structures/queue-of-people.jpeg',
  width: '592',
  height: '394',
  alt: 'A narrow stree with a queue of people in the rain',
  authorHref: 'https://unsplash.com/@ethanhjy',
  authorName: 'Ethan Hu',
};

export const pageData = {
  title: 'Queue Data Structure',
  description: 'Solving algorithms problems with TK',
  date: '2020-01-13',
  tags,
  coverImage,
};
