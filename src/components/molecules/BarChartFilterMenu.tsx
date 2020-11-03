import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControlLabel, Radio, RadioGroup, Button } from '@material-ui/core';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
registerLocale('ja', ja);

import { FilterGroupName } from '~/components/atoms/FilterGroupName';
import { useStyles } from './ChartFilterMenuStyle';

const sortList = ['デフォルト', '降順', '昇順'] as const;

export const BarChartFilterMenu: React.FC = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = React.useState(new Date());
  const aaa = (date) => {
    setStartDate(date);
  };

  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FilterGroupName name="並び順">
          <Controller
            name="sort"
            as={
              <RadioGroup name="sort">
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
            defaultValue={sortList[0]}
            className={classes.radioRoot}
          />
        </FilterGroupName>
        <FilterGroupName name="日付">
          <DatePicker
            locale="ja"
            selected={startDate}
            onChange={(date) => aaa(date)}
            minDate={new Date()}
            dateFormat="yyyy/MM/dd"
            // maxDate={new Date()}
            showDisabledMonthNavigation
          />
          <input
            value={String(startDate)}
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
