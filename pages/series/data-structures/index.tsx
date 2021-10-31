import type { NextPage } from 'next';
import { FC } from 'react';
import Image from 'next/image';
import { Head } from '../../../Base/components/Head';
import { SubstackEmbed } from '../../../Base/Community/SubstackEmbed';
import { Title } from '../../../Base/Article/Title';
import { Meta } from '../../../Base/Article/Meta';

export const tags = [
  {
    href: '../../tags/algorithms_and_data_structures.html',
    name: 'algorithms_and_data_structures',
  },
  {
    href: '../../tags/python.html',
    name: 'python',
  },
];

export const Body: FC = () => (
  <div className="content index width mx-auto px2 my4">
    <div id="header-post">
      <a id="menu-icon" href="../../../index.html">
        <span className="fas fa-long-arrow-alt-left"></span>
        Home
      </a>
    </div>
    <article
      className="post"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <header>
        <Title text="Data Structures Series" />
        <Meta date="2020-06-14" tags={tags} />
      </header>

      <div className="figure">
        <Image src="/assets/intro.jpg" width="200" height="300" alt="" />
        <span className="figcaption">
          Photo by
          <a
            href="https://unsplash.com/@fabioha"
            target="_blank"
            rel="noreferrer"
          >
            fabio
          </a>
        </span>
      </div>

      <hr />

      <p>
        This is part of my series on <code>Data Structures</code>, where I
        document posts about algorithms problems I solved.
      </p>

      <p>
        This is live document and will be updated everytime I solve new
        problems.
      </p>

      <h2>Data Structures Series</h2>

      <ul className="post-list">
        <li className="post-item">
          <div className="meta">
            <time dateTime="2020-01-06T00:00:00.000Z" itemProp="datePublished">
              2020-01-06
            </time>
          </div>
          <span>
            <a href="../../2020/01/stack-data-structure/index.html">
              Stack Data Structure
            </a>
          </span>
        </li>

        <li className="post-item">
          <div className="meta">
            <time dateTime="2020-01-13T00:00:00.000Z" itemProp="datePublished">
              2020-01-13
            </time>
          </div>
          <span>
            <a href="../../2020/01/queue-data-structure/index.html">
              Queue Data Structure
            </a>
          </span>
        </li>

        <li className="post-item">
          <div className="meta">
            <time dateTime="2020-02-02T00:00:00.000Z" itemProp="datePublished">
              2020-02-02
            </time>
          </div>
          <span>
            <a href="../../2020/02/linked-list/index.html">
              Linked List Data Structure
            </a>
          </span>
        </li>

        <li className="post-item">
          <div className="meta">
            <time dateTime="2020-02-10T00:00:00.000Z" itemProp="datePublished">
              2020-02-10
            </time>
          </div>
          <span>
            <a href="../../2020/02/tree-data-structure/index.html">
              Tree Data Structure
            </a>
          </span>
        </li>
      </ul>

      <p>
        My
        <a
          className="icon"
          target="_blank"
          href="https://twitter.com/leandrotk_"
          title="twitter"
          rel="noreferrer"
        >
          Twitter <span className="fab fa-twitter" />
        </a>
        and
        <a
          className="icon"
          target="_blank"
          href="https://github.com/leandrotk"
          title="github"
          rel="noreferrer"
        >
          Github
          <span className="fab fa-github" />
        </a>
      </p>
    </article>

    <SubstackEmbed />

    <div className="meta meta-footer">
      <div className="article-tag">
        Tags:
        <a
          className="tag-link"
          href="../../tags/algorithms_and_data_structures.html"
        >
          algorithms_and_data_structures
        </a>
        <a className="tag-link" href="../../tags/python.html">
          python
        </a>
      </div>
    </div>

    <div className="support-buttons">
      <a
        className="patreon-button"
        href="https://www.patreon.com/iamteekay"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="data:image/png;base64,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"
          height="40"
          width="50"
          alt="Patreon"
          loading="lazy"
        />
        Become a Patron
      </a>

      <a
        href="https://ko-fi.com/teekay"
        className="kofi-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          width="24"
          height="15"
          src="data:image/png;base64,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"
          className="coffee-icon"
          alt="Coffee icon"
          loading="lazy"
        />
        Buy me a coffee
      </a>
    </div>
  </div>
);

const DataStructures: NextPage = () => (
  <>
    <Head
      title="Data Structures Series"
      description="Solving algorithms problems with TK"
      imageUrl="https://raw.githubusercontent.com/leandrotk/tk/master/series/data-structures/assets/intro.jpg"
    />
    <Body />
  </>
);

export default DataStructures;
