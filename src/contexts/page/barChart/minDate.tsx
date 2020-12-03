import React, { createContext, useContext } from 'react';

const MinDateContext = createContext({
  minDate: null,
  callSetMinDate: (date) => {},
});

export const MinDatetProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [minDate, setMindate] = React.useState<null | Date>(null);

  const callSetMinDate = (date: Date) => {
    setMindate(date);
  };

  return (
    <MinDateContext.Provider
      value={{
        minDate,
        callSetMinDate,
      }}
    >
      {children}
    </MinDateContext.Provider>
  );
};

export const useMinDate = () => {
  const context = useContext(MinDateContext);
  return context;
};
