import { Dispatch, FC, SetStateAction } from 'react';
import { createGraph } from '@imtk/md-links-graph';
import { posts } from 'data/markdown-posts';

const urlToPosition = {
  '/a-mental-model-to-think-in-typescript': {
    x: 0,
    y: 0,
  },
  '/actionable-advice-to-start-learning-to-code': {
    x: 0,
    y: 0,
  },
  '/an-introduction-to-the-basic-principles-of-functional-programming': {
    x: 0,
    y: 0,
  },
  '/basic-recipes-for-react-testing-library': {
    x: 0,
    y: 0,
  },
  '/building-an-abstraction-for-react-internationalization-messages': {
    x: 1398,
    y: 360,
  },
  '/building-an-individual-development-plan-with-notion': {
    x: 0,
    y: 0,
  },
  '/closure-currying-and-cool-abstractions': {
    x: 0,
    y: 0,
  },
  '/consistent-state-management-in-react-and-redux': {
    x: 0,
    y: 0,
  },
  '/constant-feedback-driven-development-with-nodemon': {
    x: 0,
    y: 0,
  },
  '/data-fetching-in-react-with-react-query': {
    x: 0,
    y: 0,
  },
  '/designing-my-learning-experience': {
    x: 0,
    y: 0,
  },
  '/designing-my-lifes-system': {
    x: 0,
    y: 0,
  },
  '/dx-and-software-maintainability-in-frontend-engineering': {
    x: 1400,
    y: 700,
  },
  '/fun-with-dates': { x: 0, y: 0 },
  '/functional-programming-principles-in-javascript': {
    x: 0,
    y: 0,
  },
  '/how-i-received-4-salary-raises-in-2-years-of-quintoandar-as-a-software-engineer':
    { x: 0, y: 0 },
  '/learning-python-from-zero-to-hero': {
    x: 0,
    y: 0,
  },
  '/learning-ruby-from-zero-to-hero': {
    x: 0,
    y: 0,
  },
  '/on-distraction': { x: 0, y: 0 },
  '/on-leaving': { x: 0, y: 0 },
  '/optimizing-the-performance-of-a-react-progressive-web-app': {
    x: 0,
    y: 0,
  },
  '/performance-prefetch-next-pages-chunks': {
    x: 0,
    y: 0,
  },
  '/publisher-a-tooling-to-automate-the-process-to-publish-my-blog-posts': {
    x: 0,
    y: 0,
  },
  '/react-hooks-context-api-and-pokemons': { x: 1924, y: 724 },
  '/react-query-complex-dependent-queries': {
    x: 0,
    y: 0,
  },
  '/slow-living': { x: 0, y: 0 },
  '/tdd-functions-and-react-components': {
    x: 0,
    y: 0,
  },
  '/thinking-in-data-contracts': { x: 1772, y: 508 },
  '/thoughts-on-my-productivity': {
    x: 0,
    y: 0,
  },
  '/understanding-the-basics-of-ruby-on-rails-http-mvc-and-routes': {
    x: 0,
    y: 0,
  },
  '/understanding-the-basics-of-ruby-on-rails-sql-databases-and-how-they-work':
    { x: 0, y: 0 },
  '/ux-studies-with-react-typescript-and-testing-library': {
    x: 0,
    y: 0,
  },
  '/writing-idiomatic-beautiful-ruby-code': {
    x: 0,
    y: 0,
  },
  '/series/building-an-interpreter': {
    x: 0,
    y: 0,
  },
  '/series/data-structures': {
    x: 0,
    y: 0,
  },
  '/series/elixir-learnings': {
    x: 0,
    y: 0,
  },
  '/series/frontend-challenges': {
    x: 0,
    y: 0,
  },
  '/series/mastering-javascript': {
    x: 0,
    y: 0,
  },
  '/series/rebuilding-mercaris-search': {
    x: 0,
    y: 0,
  },
  '/series/typescript-learnings': {
    x: 0,
    y: 0,
  },
  '/series/website-changelog': {
    x: 0,
    y: 0,
  },
  '/series/building-an-interpreter/lexical-analysis-part-1': {
    x: 0,
    y: 0,
  },
  '/series/building-an-interpreter/lexical-analysis-part-2': {
    x: 0,
    y: 0,
  },
  '/series/building-an-interpreter/lexical-analysis-part-3': {
    x: 0,
    y: 0,
  },
  '/series/building-an-interpreter/parser-part-1': {
    x: 0,
    y: 0,
  },
  '/series/building-an-interpreter/repl': {
    x: 0,
    y: 0,
  },
  '/series/data-structures/linked-list-data-structure': {
    x: 0,
    y: 0,
  },
  '/series/data-structures/queue-data-structure': {
    x: 0,
    y: 0,
  },
  '/series/data-structures/stack-data-structure': {
    x: 0,
    y: 0,
  },
  '/series/data-structures/tree-data-structure': {
    x: 0,
    y: 0,
  },
  '/series/elixir-learnings/div-and-rem': {
    x: 0,
    y: 0,
  },
  '/series/elixir-learnings/playing-around-with-lists': {
    x: 0,
    y: 0,
  },
  '/series/frontend-challenges/findhotel-frontend-challenge': {
    x: 0,
    y: 0,
  },
  '/series/mastering-javascript/destructuring-objects-and-arrays': {
    x: 0,
    y: 0,
  },
  '/series/mastering-javascript/revisiting-conditionals-in-javascript-and-typescript':
    { x: 0, y: 0 },
  '/series/rebuilding-mercaris-search/home-menu': {
    x: 0,
    y: 0,
  },
  '/series/rebuilding-mercaris-search/setup-nextjs-with-typescript-prettier-and-jest':
    { x: 0, y: 0 },
  '/series/typescript-learnings/interesting-types': {
    x: 0,
    y: 0,
  },
  '/series/typescript-learnings/object-destructuring': {
    x: 0,
    y: 0,
  },
  '/series/typescript-learnings/type-system': {
    x: 0,
    y: 0,
  },
  '/series/typescript-learnings/union-types-with-objects': {
    x: 0,
    y: 0,
  },
  '/series/website-changelog/building-my-legacy-through-accessible-open-and-free-content':
    { x: 0, y: 0 },
  '/series/website-changelog/refactoring-setup': {
    x: 0,
    y: 0,
  },
};

type Position = {
  x: number;
  y: number;
};

type UrlToPosition = {
  [key: string]: Position | undefined;
};

function getNodePosition(url: string) {
  return (
    (urlToPosition as UrlToPosition)[url] || {
      x: 0,
      y: 0,
    }
  );
}

type SetIdType = Dispatch<SetStateAction<number>>;
type SetOpenType = Dispatch<SetStateAction<boolean>>;

type NodePropTypes = {
  setId: SetIdType;
  setOpen: SetOpenType;
  text: string;
  id: number;
};

const Node: FC<NodePropTypes> = ({ setId, setOpen, text, id }) => (
  <div
    onClick={() => {
      setId(id);
      setOpen(true);
    }}
  >
    {text}
  </div>
);

const excludedPages = [
  '',
  '/',
  '/writings',
  '/support',
  '/rss.xml',
  undefined,
  null,
];

function isValidLink(url: string) {
  return (
    !url.startsWith('https') &&
    !url.startsWith('http') &&
    !url.startsWith('www') &&
    !excludedPages.includes(url)
  );
}

const graph = createGraph(posts, isValidLink);

export const buildGraph = ({
  setId,
  setOpen,
}: {
  setId: SetIdType;
  setOpen: SetOpenType;
}) => {
  const nodes = graph.nodes.map(({ text, url, id }) => ({
    id: id.toString(),
    data: {
      label: <Node setId={setId} setOpen={setOpen} text={text} id={id} />,
    },
    position: getNodePosition(url),
  }));

  const edges = graph.edges.map(({ source, target }) => ({
    id: `${source}-${target}`,
    source,
    target,
    animated: true,
  }));

  return [...nodes, ...edges];
};
