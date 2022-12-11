import { Fragment } from 'react';
import Head from 'next/head';

import Hero from '../components/home-page/hero';


function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Code Recipes</title>
        <meta
          name='description'
          content='Learning NextJS'
        />
      </Head>
      <Hero />
    </Fragment>
  );
}


export default HomePage;
