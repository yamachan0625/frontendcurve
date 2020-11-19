import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { QueryLazyOptions } from '@apollo/client';
import { FormControlLabel, Radio, RadioGroup, Button } from '@material-ui/core';
import DatePicker, { registerLocale } from 'react-datepicker';
import dayjs from 'dayjs';
import ja from 'date-fns/locale/ja';
registerLocale('ja', ja);

import { FilterGroupName } from '~/components/atoms/FilterGroupName';
import { useStyles } from './ChartFilterMenuStyle';

const sortList = ['デフォルト', '降順', '昇順'] as const;

type Props = {
  getBarChartList: (options?: QueryLazyOptions<Record<string, any>>) => void;
  selectDate: Date;
  setSelectDate: React.Dispatch<React.SetStateAction<Date>>;
  minDate: Date;
  maxDate: Date;
  toggleAccordion: () => void;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string[]>>;
};

export const BarChartFilterMenu: React.FC<Props> = ({
  getBarChartList,
  selectDate,
  setSelectDate,
  minDate,
  maxDate,
  toggleAccordion,
  setSelectedFilter,
}) => {
  const classes = useStyles();

  const { register, handleSubmit, control } = useForm();

  const onSubmit = ({ date, sortOrder }) => {
    getBarChartList({ variables: { date, sortOrder } });
    setSelectedFilter([sortOrder, String(dayjs(date).format('YYYY/MM/DD'))]);
    toggleAccordion();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FilterGroupName name="並び順">
          <Controller
            name="sortOrder"
            as={
              <RadioGroup name="sortOrder">
                {sortList.map((item) => (
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
            defaultValue={'デフォルト'}
            className={classes.radioRoot}
          />
        </FilterGroupName>
        <FilterGroupName name="日付">
          <div>
            <DatePicker
              className={classes.carenderStyle}
              locale="ja"
              selected={selectDate}
              onChange={(date) => setSelectDate(date)}
              dateFormat="yyyy/MM/dd"
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="日付を選択してください"
            />
            <input
              value={String(selectDate)}
              name="date"
              ref={register}
              type="hidden"
            />
          </div>
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
