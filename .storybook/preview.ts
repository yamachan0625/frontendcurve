import { addParameters, configure } from '@storybook/react';
// addon-console を追加した場合は読み込む
import '@storybook/addon-console';
// addon-viewport を追加した場合は読み込む
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/reset.css';

addParameters({
  // addon-viewport を追加した場合は設定
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

const req = [require.context('../src/stories', true, /.stor(ies|y).[tj]sx$/)];
configure(req, module);
