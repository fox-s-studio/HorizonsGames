import React from 'react';
import App from 'next/app';
import Head from 'next/head';

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Horizon's Games</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default MyApp;
