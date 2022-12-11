import { Fragment } from 'react';
import Head from 'next/head';

import References from '../components/references/references-comp';

function ReferencesPage() {
  return (
    <Fragment>
      <Head>
        <title>References</title>
        <meta name='references us' content='this is a simple references page' />
      </Head>
      <References/>
    </Fragment>
  );
}

export default ReferencesPage;
