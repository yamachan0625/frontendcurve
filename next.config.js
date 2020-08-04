// ファイルの先頭に eslint-disable を追加
/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/ const path = require('path');

module.exports = {
  webpack: (config, { webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src'),
    };
    config.plugins.push(new webpack.IgnorePlugin(/\.stor(ies|y).[tj]sx$/));
    return config;
  },
};
