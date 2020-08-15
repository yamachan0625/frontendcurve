// ファイルの先頭に eslint-disable を追加
/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/

const path = require('path');

const ROOT_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://awseb-awseb-t7h2otj93b0q-2085495435.ap-northeast-1.elb.amazonaws.com'
    : 'http://localhost:4000';

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src'),
    };
    return config;
  },
  async rewrites() {
    return [
      { source: '/graphql', destination: `${ROOT_URL}/graphql` },
      {
        source: '/playground',
        destination: `${ROOT_URL}/playground`,
      },
    ];
  },
};
