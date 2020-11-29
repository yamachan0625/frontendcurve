import React, { createContext, useContext } from 'react';

const SelectDatepickerContext = createContext({
  selectDate: new Date(),
  callSetSelectDate: (date) => {},
});

export const SelectDatepickerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const now = new Date();
  // スクレイピングが午前3時に行われるため午前4時に日付が変わるように変更
  now.setHours(now.getHours() - 4);
  const [selectDate, setSelectDate] = React.useState(now);

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
