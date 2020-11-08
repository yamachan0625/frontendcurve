import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControlLabel, Radio, RadioGroup, Button } from '@material-ui/core';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
registerLocale('ja', ja);

import { FilterGroupName } from '~/components/atoms/FilterGroupName';
import { useStyles } from './ChartFilterMenuStyle';

const sortList = ['デフォルト', '降順', '昇順'] as const;

export const BarChartFilterMenu = ({ getBarChartList }) => {
  const classes = useStyles();
  const [selectDate, setSelectDate] = React.useState(new Date());

  const { register, handleSubmit, control } = useForm();

  const onSubmit = ({ date, sortOrder }) => {
    getBarChartList({ variables: { date, sortOrder } });
  };

  const aaa = (selectDate) => {
    setSelectDate(selectDate);
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
          <DatePicker
            locale="ja"
            selected={selectDate}
            onChange={(date) => aaa(date)}
            dateFormat="yyyy/MM/dd"
            // minDate={new Date()}
            // maxDate={new Date()}
            showDisabledMonthNavigation
          />
          <input
            value={String(selectDate)}
            name="date"
            ref={register}
            type="hidden"
          />
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
