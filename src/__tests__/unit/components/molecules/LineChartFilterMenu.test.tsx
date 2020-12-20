import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act, cleanup } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';

import { LineChartFilterMenu } from '~/components/molecules/lineChart/LineChartFilterMenu';
import { SelectSkillContext } from '~/contexts/page/lineChart/selectSkill';
import { DateRangeContext } from '~/contexts/page/lineChart/dateRange';

const toggleAccordion = jest.fn();

beforeEach(() => {
  const selectedSkillsMock = {
    selectedSkills: ['React', 'VueJs', 'Angular'],
    callSetSelectSkills: jest.fn(),
  };

  const dateRangeMock = {
    selectedDateRange: '1週間',
    callSetRangeDate: jest.fn(),
  };

  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <SelectSkillContext.Provider value={selectedSkillsMock}>
        <DateRangeContext.Provider value={dateRangeMock}>
          <LineChartFilterMenu toggleAccordion={toggleAccordion} />
        </DateRangeContext.Provider>
      </SelectSkillContext.Provider>
    </MockedProvider>
  );
});

afterEach(() => cleanup());

describe('<BarChartFilterMenu />', () => {
  describe('期間ラジオボタンの検証', () => {
    it('1週間、1ヶ月、3ヶ月が存在する', () => {
      const radio = screen.getAllByRole('radio') as HTMLInputElement[];
      expect(radio.map((target) => target.value)).toEqual([
        '1週間',
        '1ヶ月',
        '3ヶ月',
      ]);
    });

    it('1週間が初期値としてcheckされている', () => {
      const radio = screen.getByDisplayValue('1週間') as HTMLInputElement;
      expect(radio.checked).toBe(true);
    });

    it('初期値、選択時の挙動', () => {
      const radio = screen.getByDisplayValue('1週間') as HTMLInputElement;
      expect(radio.value).toBe('1週間');
      act(() => {
        fireEvent.change(radio, { target: { value: '1ヶ月' } });
      });
      expect(radio.value).toBe('1ヶ月');
    });
  });

  // checkboxの挙動はuseLineChartFilterMemuのテストでカバー;
  describe('スキルチェックボックスの検証', () => {
    it('React,Angular,VueJs,NodeJs,NextJs,NuxtJs,TypeScript,JavaScript,ReactNative,Flutter,Electron,Graphql,Redux,VueX,,Jest,Cypress,Webpack,が存在する', () => {
      const checkBox = screen.getAllByRole('checkbox') as HTMLInputElement[];
      const skillCheckBoxList = checkBox.map((item) => item.name);
      expect([
        'React',
        'VueJs',
        'Angular',
        'NodeJs',
        'NextJs',
        'NuxtJs',
        'TypeScript',
        'JavaScript',
        'ReactNative',
        'Flutter',
        'Electron',
        'Graphql',
        'VueX',
        'Jest',
        'Cypress',
        'Webpack',
      ]).toEqual(skillCheckBoxList);
    });

    it('React,Vue.js,Angularが初期値としてcheckされている', () => {
      const checkBox = screen.getAllByRole('checkbox') as HTMLInputElement[];
      const initialCheckedValue = checkBox
        .map((input) => {
          if (input.checked) return input.name;
        })
        .filter(Boolean);
      expect(initialCheckedValue).toEqual(['React', 'VueJs', 'Angular']);
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
