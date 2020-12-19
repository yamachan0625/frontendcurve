import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { cleanup } from '@testing-library/react-hooks';

import { ChartDisplaySizeContext } from '~/contexts/chartDisplaySize';
import { ChartPlaceHolder } from '~/components/molecules/ChartPlaceHolder';

afterEach(() => cleanup());

describe('<ChartPlaceHolder />', () => {
  it('placeHolderが6つ存在する', () => {
    const chartDisplaySizeMock = {
      chartDisplaySize: 6 as 6 | 12,
      changeChartDisplaySize: jest.fn(),
    };

    render(
      <ChartDisplaySizeContext.Provider value={chartDisplaySizeMock}>
        <ChartPlaceHolder />
      </ChartDisplaySizeContext.Provider>
    );

    const progress = screen.getAllByTestId('chart-progrsss');
    expect(progress.length).toBe(6);
  });
});
