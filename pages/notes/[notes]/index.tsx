import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Head } from 'Base/components/Head';
import { Content, MDX, serializeMDX } from 'Base/components/MDX';
import { Layout } from 'Base/Article/Layout';
import {
  getNestedPaths,
  getNestedPostContent,
  getNestedPostMetadata,
  PostMetadata,
} from 'src/lib';

interface Params extends ParsedUrlQuery {
  notes: string;
}

type PageProps = {
  content: Content;
  postMetadata: PostMetadata;
  minutes: number;
};

const Page: NextPage<PageProps> = ({ content, postMetadata, minutes }) => (
  <>
    <Head
      title={postMetadata.title}
      description={postMetadata.description}
      imageUrl={postMetadata.coverImage.src}
    />
    <Layout
      tags={postMetadata.tags}
      title={postMetadata.title}
      date={postMetadata.date}
      alternativeArticle={postMetadata.alternativeArticle}
      minutes={minutes}
      showSocialLinks
      coverImage={postMetadata.coverImage}
    >
      <MDX content={content} />
    </Layout>
  </>
);

export async function getStaticPaths() {
  return {
    paths: getNestedPaths('notes'),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context,
) => {
  const { notes } = context.params!;
  const { postContent, minutes } = getNestedPostContent('notes', notes);
  const postMetadata = getNestedPostMetadata('notes', notes);
  const content = await serializeMDX(postContent);

  return {
    props: {
      content,
      postMetadata,
      minutes,
    },
  };
};

export default Page;
