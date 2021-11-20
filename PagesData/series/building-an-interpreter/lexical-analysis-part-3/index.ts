export { Article } from './Article';

const tags = [
  {
    href: '/tags/programming-language-design',
    name: 'programming_language_design',
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
  src: '/series/building-an-interpreter/splash.jpg',
  width: '592',
  height: '394',
  alt: 'sparkles of colorful lights',
  authorHref: 'https://unsplash.com/@hishahadat',
  authorName: 'Shahadat Rahman',
};

export const pageData = {
  title: 'Building an Interpreter: Lexical Analysis - Part 3',
  description:
    'The third part of the Lexical Analysis implementation of the interpreter',
  date: '2021-07-18',
  tags,
  coverImage,
};
