import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from '@material-ui/core';

import { FilterGroupName } from '~/components/atoms/FilterGroupName';
import { useStyles } from '../ChartFilterMenuStyle';
import { useLineChartData } from '~/contexts/page/lineChart/lineChartData';
import { useSelectSkill } from '~/contexts/page/lineChart/selectSkill';
import { useDateRange } from '~/contexts/page/lineChart/dateRange';

const dateRangeList = ['1週間', '1ヶ月', '3ヶ月'] as const;
const skillNameList = [
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

export const useLineChartFilterMemu = () => {
  const [skillListOption, setSkillListOption] = React.useState({
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

  // スキルリストのチェックボックスを変更
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSkillListOption({
      ...skillListOption,
      [event.target.name]: event.target.checked,
    });
  };

  return { skillListOption, handleChange };
};

type Props = {
  toggleAccordion: () => void;
};

export const LineChartFilterMenu: React.FC<Props> = React.memo(
  ({ toggleAccordion }) => {
    const classes = useStyles();
    const { register, handleSubmit, control } = useForm();
    const { getLineChartList } = useLineChartData();
    const { skillListOption, handleChange } = useLineChartFilterMemu();
    const { callSetSelectSkills } = useSelectSkill();
    const { callSetRangeDate } = useDateRange();

    const onSubmit = (data) => {
      const dateRange: string = data.dateRange;
      const selectedSkills = Object.entries(data)
        .map((skills) => {
          if (skills[1] === true) {
            return skills[0];
          }
        })
        .filter(Boolean);

      getLineChartList({ variables: { dateRange, skills: selectedSkills } });
      callSetRangeDate(dateRange);
      callSetSelectSkills(selectedSkills);
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
                      control={<Radio color="default" />}
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
                    checked={skillListOption[item.name]}
                    name={item.name}
                    onChange={handleChange}
                    color="default"
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
            data-testid="filter-button"
          >
            適用
          </Button>
        </form>
      </>
    );
  }
);
