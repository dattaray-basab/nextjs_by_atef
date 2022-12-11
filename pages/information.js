import { Fragment } from 'react';
import Head from 'next/head';

import Information from '../components/information/information-comp';

function InformationPage() {
  return (
    <Fragment>
      <Head>
        <title>Information</title>
        <meta name='information us' content='this is a simple information page' />
      </Head>
      <Information/>
    </Fragment>
  );
}

export default InformationPage;
