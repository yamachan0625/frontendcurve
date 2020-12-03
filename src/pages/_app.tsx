import React, { useContext, useEffect } from 'react';
import { AppProps /**AppContext  */ } from 'next/app';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import { RootProvider } from '~/contexts/index';
import '~/styles/reset.css';
import 'react-datepicker/dist/react-datepicker.css';

const link = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin',
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// デフォルトのheadersでリクエスト設定
// const createApolloClient = () => {
//   const httpLink = createHttpLink({
//     uri: '/graphql',
//     credentials: 'same-origin',
//   });

//   const authLink = setContext((_, { headers }) => {
//     const userId = localStorage.getItem('userId');
//     return {
//       headers: {
//         ...headers,
//         'USER-ID': userId,
//       },
//     };
//   });
//   return new ApolloClient({
//     // ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache(),
//   });
// };

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};
/**
 * pageコンポーネント全てをラップする。
 * 共通で行いたい処理を書く
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  // const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <Provider template={AlertTemplate} {...options}>
        <RootProvider>
          <Component {...pageProps} />
        </RootProvider>
      </Provider>
    </ApolloProvider>
  );
};

export default MyApp;
