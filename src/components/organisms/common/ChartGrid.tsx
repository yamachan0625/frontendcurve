import React from 'react';

type Props = {
  chartDisplaySize: 6 | 12;
};
export const ChartGrid: React.FC<Props> = React.memo(
  ({ chartDisplaySize, children }) => (
    <>
      {chartDisplaySize === 6 && children}
      {chartDisplaySize === 12 && children}
    </>
  )
);
