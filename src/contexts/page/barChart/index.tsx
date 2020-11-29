import { BarChartDatatProvider } from './barChartData';
import { SelectDatepickerProvider } from './selectDatepicker';
import { MinDatetProvider } from './minDate';
import { SortOrderProvider } from './sortOrder';
import { BarChartSelectedFilterProvider } from './barChartSelectedFilter';

export const BarChartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <BarChartDatatProvider>
      <SelectDatepickerProvider>
        <MinDatetProvider>
          <SortOrderProvider>
            <BarChartSelectedFilterProvider>
              {children}
            </BarChartSelectedFilterProvider>
          </SortOrderProvider>
        </MinDatetProvider>
      </SelectDatepickerProvider>
    </BarChartDatatProvider>
  );
};
