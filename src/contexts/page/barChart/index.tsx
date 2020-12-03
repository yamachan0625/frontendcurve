import { BarChartDatatProvider } from './barChartData';
import { SelectDatepickerProvider } from './selectDatepicker';
import { MinDatetProvider } from './minDate';
import { SortOrderProvider } from './sortOrder';

export const BarChartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <BarChartDatatProvider>
      <SelectDatepickerProvider>
        <MinDatetProvider>
          <SortOrderProvider>{children}</SortOrderProvider>
        </MinDatetProvider>
      </SelectDatepickerProvider>
    </BarChartDatatProvider>
  );
};
