import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act, cleanup } from '@testing-library/react-hooks';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { ChartDisplaySizeSwitcher } from '~/components/molecules/ChartDisplaySizeSwitcher';
import { ThemeContext } from '~/contexts/theme';
import { ChartDisplaySizeContext } from '~/contexts/chartDisplaySize';
import { lightTheme } from '~/styles/theme/lightTheme';

afterEach(() => cleanup());

//   //NOTE: material-uiのHiddenコンポーネントを使用しているとrenderできないためデフォルトのeidthを設定する必要がある。
describe('<ChartDisplaySizeSwitcher />', () => {
  describe('chartSize:6', () => {
    beforeEach(() => {
      //NOTE: material-uiのHiddenコンポーネントを使用しているとrenderできないためデフォルトのeidthを設定する必要がある。
      const SizeWrapper = (props) => {
        const theme = createMuiTheme({
          props: { MuiWithWidth: { initialWidth: 'xl' } },
        });

        return (
          <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
        );
      };

      const themeMock = {
        theme: lightTheme,
        handleThemeChange: jest.fn(),
      };

      const chartDisplaySizeMock = {
        chartDisplaySize: 6 as 6 | 12,
        changeChartDisplaySize: jest.fn(),
      };

      render(
        <ThemeContext.Provider value={themeMock}>
          <ChartDisplaySizeContext.Provider value={chartDisplaySizeMock}>
            <ChartDisplaySizeSwitcher />
          </ChartDisplaySizeContext.Provider>
        </ThemeContext.Provider>,
        { wrapper: SizeWrapper }
      );
    });

    it('singleDisplaySwitcherのスタイル検証', () => {
      const singleDisplaySwitcher = screen.getByTestId(
        'single-display-switcher'
      );
      expect(singleDisplaySwitcher.style.color).toBe('rgb(172, 165, 165)');
      expect(singleDisplaySwitcher.style.cursor).toBe('');
    });

    it('doubleDisplaySwitcherのスタイル検証', () => {
      const doubleDisplaySwitcher = screen.getByTestId(
        'double-display-switcher'
      );
      expect(doubleDisplaySwitcher.style.color).toBe('rgb(67, 66, 66)');
      expect(doubleDisplaySwitcher.style.cursor).toBe('pointer');
    });
  });

  describe('chartSize:12', () => {
    beforeEach(() => {
      //NOTE: material-uiのHiddenコンポーネントを使用しているとrenderできないためデフォルトのeidthを設定する必要がある。
      const SizeWrapper = (props) => {
        const theme = createMuiTheme({
          props: { MuiWithWidth: { initialWidth: 'xl' } },
        });

        return (
          <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
        );
      };

      const themeMock = {
        theme: lightTheme,
        handleThemeChange: jest.fn(),
      };

      const chartDisplaySizeMock = {
        chartDisplaySize: 12 as 6 | 12,
        changeChartDisplaySize: jest.fn(),
      };

      render(
        <ThemeContext.Provider value={themeMock}>
          <ChartDisplaySizeContext.Provider value={chartDisplaySizeMock}>
            <ChartDisplaySizeSwitcher />
          </ChartDisplaySizeContext.Provider>
        </ThemeContext.Provider>,
        { wrapper: SizeWrapper }
      );
    });

    it('singleDisplaySwitcherのスタイル検証', () => {
      const singleDisplaySwitcher = screen.getByTestId(
        'single-display-switcher'
      );
      expect(singleDisplaySwitcher.style.color).toBe('rgb(67, 66, 66)');
      expect(singleDisplaySwitcher.style.cursor).toBe('pointer');
    });

    it('doubleDisplaySwitcherのスタイル検証', () => {
      const doubleDisplaySwitcher = screen.getByTestId(
        'double-display-switcher'
      );
      expect(doubleDisplaySwitcher.style.color).toBe('rgb(172, 165, 165)');
      expect(doubleDisplaySwitcher.style.cursor).toBe('');
    });
  });
});
