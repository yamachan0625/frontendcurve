import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControlLabel, Radio, RadioGroup, Button } from '@material-ui/core';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
registerLocale('ja', ja);

import { chartMaxDate } from '~/helpers/date';
import { FilterGroupName } from '~/components/atoms/FilterGroupName';
import { useStyles } from '../ChartFilterMenuStyle';
import { useMinDate } from '~/contexts/page/barChart/minDate';
import { useSelectDatepicker } from '~/contexts/page/barChart/selectDatepicker';
import { useSortOrder } from '~/contexts/page/barChart/sortOrder';
import { useBarChartData } from '~/contexts/page/barChart/barChartData';

const sortList = ['デフォルト', '降順', '昇順'] as const;

type Props = {
  toggleAccordion: () => void;
};

export const BarChartFilterMenu: React.FC<Props> = React.memo(
  ({ toggleAccordion }) => {
    const classes = useStyles();
    const { register, handleSubmit, control } = useForm();
    const { minDate } = useMinDate();
    const { selectDate, callSetSelectDate } = useSelectDatepicker();
    const { callSetSortOrder } = useSortOrder();
    const { getBarChartList } = useBarChartData();

    const onSubmit = ({ date, sortOrder }) => {
      getBarChartList({
        variables: { date, sortOrder },
      });
      callSetSortOrder(sortOrder);
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
                      control={<Radio color="default" />}
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
                onChange={(date) => callSetSelectDate(date)}
                dateFormat="yyyy/MM/dd"
                minDate={minDate}
                maxDate={chartMaxDate()}
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
  }
);
