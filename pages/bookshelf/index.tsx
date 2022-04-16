import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { Bookshelf } from 'Home/components/Bookshelf/Bookshelf';
import { HomeLink } from 'Base/Article/HomeLink';

const Page: NextPage = () => (
  <>
    <Head
      title="TK —— Bookshelf"
      description="Learning & Improving with TK —— Bookshelf"
      imageUrl="/logo.jpeg"
    />

    <main id="main">
      <div className="content">
        <HomeLink />
        <Bookshelf header="h1" />
      </div>
    </main>
  </>
);

export default Page;
