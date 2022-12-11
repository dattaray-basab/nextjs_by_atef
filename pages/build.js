import { Fragment } from 'react';
import Head from 'next/head';

import Build from '../components/build/build-comp';

function BuildPage() {
  return (
    <Fragment>
      <Head>
        <title>Build</title>
        <meta name='build us' content='this is a simple build page' />
      </Head>
      <Build/>
    </Fragment>
  );
}

export default BuildPage;
