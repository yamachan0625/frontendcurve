import { AuthProvider } from '~/contexts/auth';
import { ChartDisplaySizeProvider } from '~/contexts/chartDisplaySize';
import { ThemeContextProvider } from '~/contexts/theme';
import { BarChartProvider } from './page/barChart/index';
import { LineChartProvider } from './page/lineChart/index';

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <ChartDisplaySizeProvider>
        <ThemeContextProvider>
          <BarChartProvider>
            <LineChartProvider>{children}</LineChartProvider>
          </BarChartProvider>
        </ThemeContextProvider>
      </ChartDisplaySizeProvider>
    </AuthProvider>
  );
};
