import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import {
  initializeFonts,
  theme,
} from '../lib';

class MyDocument extends Document {
  componentDidMount() {
    initializeFonts();
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => <App {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
  };
};

export default MyDocument;
