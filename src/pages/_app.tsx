import React from 'react';
import { AppProps /**AppContext  */ } from 'next/app';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { AuthProvider } from '../contexts/auth';
import '~/styles/reset.css';

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

/**
 * pageコンポーネント全てをラップする。
 * 共通で行いたい処理を書く
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  // const client = createApolloClient();
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ApolloProvider>
    </React.Fragment>
  );
};

export default MyApp;
