import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act, cleanup } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';

import { BarChartFilterMenu } from '~/components/molecules/barChart/BarChartFilterMenu';
import { SelectDatepickerContext } from '~/contexts/page/barChart/selectDatepicker';
import { SortOrderContext } from '~/contexts/page/barChart/sortOrder';

const toggleAccordion = jest.fn();

beforeEach(() => {
  const selectDatePickerMock = {
    selectDate: new Date('Fri Dec 11 2020 11:03:04'),
    callSetSelectDate: jest.fn(),
  };

  const sortOrderMock = {
    sortOrder: 'デフォルト',
    callSetSortOrder: jest.fn(),
  };

  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <SortOrderContext.Provider value={sortOrderMock}>
        <SelectDatepickerContext.Provider value={selectDatePickerMock}>
          <BarChartFilterMenu toggleAccordion={toggleAccordion} />
        </SelectDatepickerContext.Provider>
      </SortOrderContext.Provider>
    </MockedProvider>
  );
});

afterEach(() => cleanup());

describe('<BarChartFilterMenu />', () => {
  it('inputにselectDateの値が初期値として入力されている', () => {
    const input = screen.getByTestId(
      'date-hiden-input-field'
    ) as HTMLInputElement;
    expect(input.value).toBe(
      'Fri Dec 11 2020 11:03:04 GMT+0900 (Japan Standard Time)'
    );
  });

  describe('並び順ラジオボタンの検証', () => {
    it('デフォルトが初期値としてcheckされている', () => {
      const radio = screen.getByDisplayValue('デフォルト') as HTMLInputElement;
      expect(radio.checked).toBe(true);
    });

    it('初期値、選択時の挙動', () => {
      const radio = screen.getByDisplayValue('デフォルト') as HTMLInputElement;
      expect(radio.value).toBe('デフォルト');
      act(() => {
        fireEvent.change(radio, { target: { value: '降順' } });
      });
      expect(radio.value).toBe('降順');
    });

    it('デフォルト、降順、昇順が存在する', () => {
      const radio = screen.getAllByRole('radio') as HTMLInputElement[];
      expect(radio.map((target) => target.value)).toEqual([
        'デフォルト',
        '降順',
        '昇順',
      ]);
    });
  });

  it('ボタンクリックでtoggleAccordionが呼ばれる', async () => {
    fireEvent.submit(screen.getByTestId('filter-button'));
    await waitFor(() => {
      new Promise((resolve) => setTimeout(resolve, 0));
    });
    await waitFor(() => {
      expect(screen.queryAllByRole('alert')).toHaveLength(0);
    });
    expect(toggleAccordion).toHaveBeenCalled();
  });
});
