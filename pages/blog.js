import { Fragment } from 'react';
import Head from 'next/head';

import Blog from '../components/blog/blog-comp';

function BlogPage() {
  return (
    <Fragment>
      <Head>
        <title>Blog</title>
        <meta name='blog us' content='this is a simple blog page' />
      </Head>
      <Blog/>
    </Fragment>
  );
}

export default BlogPage;
