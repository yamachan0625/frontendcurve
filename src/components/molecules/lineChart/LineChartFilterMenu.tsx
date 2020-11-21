import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from '@material-ui/core';
import { QueryLazyOptions } from '@apollo/client';

import { FilterGroupName } from '~/components/atoms/FilterGroupName';
import { useStyles } from '../ChartFilterMenuStyle';

const skillOptionObj = {
  NodeJs: {
    name: 'Node.js',
    color: 'rgba(62, 134, 61, 1)',
    transparentColor: 'rgba(62, 134, 61, 0.5)',
  },
  React: {
    name: 'React',
    color: 'rgba(97, 219, 251, 1)',
    transparentColor: 'rgba(97, 219, 251, 0.5)',
  },
  Angular: {
    name: 'Angular',
    color: 'rgba(221, 0, 49, 1)',
    transparentColor: 'rgba(221, 0, 49, 0.5)',
  },
  VueJs: {
    name: 'Vue.js',
    color: 'rgba(65, 184, 131, 1)',
    transparentColor: 'rgba(65, 184, 131, 0.5)',
  },
  NextJs: {
    name: 'Next.js',
    color: 'rgba(0, 0, 0, 1)',
    transparentColor: 'rgba(0, 0, 0, 0.5)',
  },
  NuxtJs: {
    name: 'Nuxt.js',
    color: 'rgba(63, 115, 102, 1)',
    transparentColor: 'rgba(63, 115, 102, 0.5)',
  },
  TypeScript: {
    name: 'TypeScript',
    color: 'rgba(49, 120, 198, 1)',
    transparentColor: 'rgba(49, 120, 198, 0.5)',
  },
  JavaScript: {
    name: 'JavaScript',
    color: 'rgba(253, 216, 60, 1)',
    transparentColor: 'rgba(253, 216, 60, 0.5)',
  },
  ReactNative: {
    name: 'ReactNative',
    color: 'rgba(0, 164, 211, 1)',
    transparentColor: 'rgba(0, 164, 211, 0.5)',
  },
  Flutter: {
    name: 'Flutter',
    color: 'rgba(97, 202, 250, 1)',
    transparentColor: 'rgba(97, 202, 250, 0.5)',
  },
  Electron: {
    name: 'Electron',
    color: 'rgba(59, 126, 138, 1)',
    transparentColor: 'rgba(59, 126, 138, 0.5)',
  },
  Graphql: {
    name: 'Graphql',
    color: 'rgba(229, 53, 171, 1)',
    transparentColor: 'rgba(229, 53, 171, 0.5)',
  },
  Redux: {
    name: 'Redux',
    color: 'rgba(118, 74, 188, 1)',
    transparentColor: 'rgba(118, 74, 188, 0.5)',
  },
  VueX: {
    name: 'VueX',
    color: 'rgba(93, 183, 133, 1)',
    transparentColor: 'rgba(93, 183, 133, 0.35)',
  },
  Jest: {
    name: 'Jest',
    color: 'rgba(153, 66, 91, 1)',
    transparentColor: 'rgba(153, 66, 91, 0.5)',
  },
  Cypress: {
    name: 'Cypress',
    color: 'rgba(71, 71, 75, 1)',
    transparentColor: 'rgba(71, 71, 75, 0.8)',
  },
  Webpack: {
    name: 'Webpack',
    color: 'rgba(142, 214, 251, 1)',
    transparentColor: 'rgba(142, 214, 251, 0.5)',
  },
} as const;

const dateRangeList = ['1週間', '1ヶ月', '3ヶ月'] as const;
export const skillNameList = [
  { label: 'React', name: 'React' },
  { label: 'Vue.js', name: 'VueJs' },
  { label: 'Angular', name: 'Angular' },
  { label: 'Node.js', name: 'NodeJs' },
  { label: 'Next.js', name: 'NextJs' },
  { label: 'Nuxt.js', name: 'NuxtJs' },
  { label: 'TypeScript', name: 'TypeScript' },
  { label: 'JavaScript', name: 'JavaScript' },
  { label: 'ReactNative', name: 'ReactNative' },
  { label: 'Flutter', name: 'Flutter' },
  { label: 'Electron', name: 'Electron' },
  { label: 'Graphql', name: 'Graphql' },
  { label: 'VueX', name: 'VueX' },
  { label: 'Jest', name: 'Jest' },
  { label: 'Cypress', name: 'Cypress' },
  { label: 'Webpack', name: 'Webpack' },
] as const;

type SelectSkillType = {
  React: boolean;
  Angular: boolean;
  VueJs: boolean;
  NodeJs: boolean;
  NextJs: boolean;
  NuxtJs: boolean;
  TypeScript: boolean;
  JavaScript: boolean;
  ReactNative: boolean;
  Flutter: boolean;
  Electron: boolean;
  Graphql: boolean;
  Redux: boolean;
  VueX: boolean;
  Jest: boolean;
  Cypress: boolean;
  Webpack: boolean;
};

type Props = {
  getLineChartList: (options?: QueryLazyOptions<Record<string, any>>) => void;
  toggleAccordion: () => void;
  selectSkill: SelectSkillType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSelectedFilter: any;
};

export const LineChartFilterMenu: React.FC<Props> = ({
  getLineChartList,
  toggleAccordion,
  selectSkill,
  handleChange,
  setSelectedFilter,
}) => {
  const classes = useStyles();

  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    const dateRange = data.dateRange;
    const selectedSkills = Object.entries(data)
      .map((skills) => {
        if (skills[1] === true) {
          return skills[0];
        }
      })
      .filter(Boolean);

    getLineChartList({ variables: { dateRange, skills: selectedSkills } });
    setSelectedFilter([
      dateRange,
      ...selectedSkills.map((skill) => skillOptionObj[skill].name),
    ]);
    toggleAccordion();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FilterGroupName name="期間">
          <Controller
            name="dateRange"
            as={
              <RadioGroup name="dateRange">
                {dateRangeList.map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))}
              </RadioGroup>
            }
            control={control}
            defaultValue={dateRangeList[0]}
            className={classes.radioRoot}
          />
        </FilterGroupName>
        <FilterGroupName name="スキル">
          {skillNameList.map((item) => (
            <FormControlLabel
              control={
                <Checkbox
                  inputRef={register}
                  checked={selectSkill[item.name]}
                  name={item.name}
                  onChange={handleChange}
                />
              }
              key={item.label}
              label={item.label}
            />
          ))}
        </FilterGroupName>
        <Button
          variant="contained"
          type="submit"
          className={classes.filterButton}
        >
          適用
        </Button>
      </form>
    </>
  );
};
