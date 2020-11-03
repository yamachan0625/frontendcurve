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
import { useStyles } from './ChartFilterMenuStyle';

const dateRangeList = ['1週間', '1ヶ月', '3ヶ月'] as const;
const languageList = [
  { label: 'React', name: 'React' },
  { label: 'Vue.js', name: 'VueJs' },
  { label: 'Angular', name: 'Angular' },
  { label: 'Node.js', name: 'NodeJs' },
  { label: 'Next.js', name: 'NextJs' },
  { label: 'Nuxt.js', name: 'NuxtJs' },
  { label: 'TypeScript', name: 'Typescript' },
  { label: 'JavaScript', name: 'JavaScript' },
  { label: 'ReactNative', name: 'ReactNative' },
  { label: 'Fulutter', name: 'Fulutter' },
  { label: 'Electron', name: 'Electron' },
  { label: 'Graphql', name: 'Graphql' },
  { label: 'VueX', name: 'VueX' },
  { label: 'Jest', name: 'Jest' },
  { label: 'Cypress', name: 'Cypress' },
  { label: 'Webpack', name: 'Webpack' },
] as const;

export const LineChartFilterMenu: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FilterGroupName name="期間">
          <Controller
            name="dataRange"
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
        <FilterGroupName name="言語">
          {languageList.map((item) => (
            <FormControlLabel
              control={
                <Checkbox
                  inputRef={register}
                  checked={state[item.name]}
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
