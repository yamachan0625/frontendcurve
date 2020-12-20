import React, { createContext, useContext } from 'react';

export const DateRangeContext = createContext({
  selectedDateRange: '1週間',
  callSetRangeDate: (date) => {},
});

export const DateRangeProvider = ({ children }) => {
  const [selectedDateRange, setSelectedDateRange] = React.useState<
    '1週間' | '1ヶ月' | '3ヶ月'
  >('1週間');

  const callSetRangeDate = (date) => {
    setSelectedDateRange(date);
  };

  return (
    <DateRangeContext.Provider
      value={{
        selectedDateRange,
        callSetRangeDate,
      }}
    >
      {children}
    </DateRangeContext.Provider>
  );
};

export const useDateRange = () => {
  const context = useContext(DateRangeContext);
  return context;
};
