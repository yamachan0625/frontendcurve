import React, { createContext, useContext } from 'react';
import dayjs from 'dayjs';

import { chartMaxDate } from '~/helpers/date';

const SelectDatepickerContext = createContext({
  selectDate: new Date(),
  callSetSelectDate: (date) => {},
});

export const SelectDatepickerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectDate, setSelectDate] = React.useState(chartMaxDate());

  const callSetSelectDate = (date: Date) => {
    // エラーになるためここで日付型に変更する
    setSelectDate(new Date(date));
  };

  return (
    <SelectDatepickerContext.Provider
      value={{
        selectDate,
        callSetSelectDate,
      }}
    >
      {children}
    </SelectDatepickerContext.Provider>
  );
};

export const useSelectDatepicker = () => {
  const context = useContext(SelectDatepickerContext);
  return context;
};
