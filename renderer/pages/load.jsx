import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '../styles/index.scss';
import Loader from '../components/Loader/index';

const Load = () => {

  return (
    <React.Fragment>
      <Head>
        <title>Load - Nextron (with-javascript-material-ui)</title>
      </Head>

      <div className='Load'>
        <Loader text="Chargement..."/>
      </div>
    </React.Fragment>
  );
};

export default Load;
