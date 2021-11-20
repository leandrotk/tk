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
  src: '/series/building-an-interpreter/analysis.jpeg',
  width: '592',
  height: '394',
  alt: 'Two men discussing and writing in a whiteboard',
  authorHref: 'https://unsplash.com/@kaleidico',
  authorName: 'Kaleidico',
};

export const pageData = {
  title: 'Building an Interpreter: Lexical Analysis - Part 1',
  description:
    'The first part of the Lexical Analysis implementation of the interpreter',
  date: '2021-05-23',
  tags,
  coverImage,
};
