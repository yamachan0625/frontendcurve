import React, { createContext, useContext } from 'react';

const DateRangeContext = createContext({
  selectedDateRange: '1週間',
  callSetRangeDate: (date) => {},
});

export const DateRangeProvider = ({ children }) => {
  const [selectedDateRange, setSelectedDateRange] = React.useState('1週間');

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
