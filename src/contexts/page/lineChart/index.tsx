import { LineChartDatatProvider } from './lineChartData';
import { DateRangeProvider } from './dateRange';
import { SelectSkillProvider } from './selectSkill';

export const LineChartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <LineChartDatatProvider>
      <DateRangeProvider>
        <SelectSkillProvider>{children}</SelectSkillProvider>
      </DateRangeProvider>
    </LineChartDatatProvider>
  );
};
