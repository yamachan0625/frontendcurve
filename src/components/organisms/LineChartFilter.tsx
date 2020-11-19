import React from 'react';

import { FilterMenu } from '~/components/organisms/common/FilterMenu';
import { LineChartFilterMenu } from '~/components/molecules/LineChartFilterMenu';
import { useAccordion } from '~/hooks/useAccordion';

export const useLineChartFilter = () => {
  const { accordionElm, toggleAccordion } = useAccordion();
  const [selectSkill, setSelectSkill] = React.useState({
    React: true,
    Angular: true,
    VueJs: true,
    NodeJs: false,
    NextJs: false,
    NuxtJs: false,
    TypeScript: false,
    JavaScript: false,
    ReactNative: false,
    Flutter: false,
    Electron: false,
    Graphql: false,
    Redux: false,
    VueX: false,
    Jest: false,
    Cypress: false,
    Webpack: false,
  });

  const [selectedFilter, setSelectedFilter] = React.useState([
    '1週間',
    'React',
    'Vue.js',
    'Angular',
  ]);

  // スキルのチェックボックス
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectSkill({
      ...selectSkill,
      [event.target.name]: event.target.checked,
    });
  };

  return {
    accordionElm,
    toggleAccordion,
    selectedFilter,
    selectSkill,
    handleChange,
    setSelectedFilter,
  };
};

export const LineChartFilter = ({ getLineChartList }) => {
  const {
    accordionElm,
    toggleAccordion,
    selectedFilter,
    selectSkill,
    handleChange,
    setSelectedFilter,
  } = useLineChartFilter();

  return (
    <FilterMenu selectedFilter={selectedFilter} ref={accordionElm}>
      <LineChartFilterMenu
        getLineChartList={getLineChartList}
        toggleAccordion={toggleAccordion}
        selectSkill={selectSkill}
        handleChange={handleChange}
        setSelectedFilter={setSelectedFilter}
      />
    </FilterMenu>
  );
};
