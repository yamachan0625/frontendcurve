import React from 'react';
import App, { AppProps } from 'next/app';
import '~/styles/reset.css';

/**
 * pageコンポーネント全てをラップする。
 * 共通で行いたい処理を書く
 */
class MyApp extends App {
  render() {
    const { Component, pageProps }: AppProps = this.props;

    return (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default MyApp;
