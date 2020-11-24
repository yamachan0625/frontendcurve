import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { useTheme } from '~/contexts/theme';

const PurpleSwitch = withStyles({
  switchBase: {
    color: '#fff',
    '&$checked': {
      color: '#fff',
    },
    '&$checked + $track': {
      backgroundColor: '#9c27b0',
    },
  },
  checked: {},
  track: {},
})(Switch);

const useSwitchTheme = () => {
  const { handleThemeChange } = useTheme();
  const [isLightTheme, setLightTheme] = React.useState(true);

  React.useEffect(() => {
    window.localStorage.getItem('theme') === 'LIGHT' && setLightTheme(false);
  }, []);

  const handleChange = React.useCallback(() => {
    setLightTheme(!isLightTheme);
    handleThemeChange(isLightTheme ? 'LIGHT' : 'DARK');
  }, [isLightTheme, handleThemeChange, setLightTheme]);

  return { isLightTheme, handleChange };
};

export const SwitchTheme: React.FC = () => {
  const { isLightTheme, handleChange } = useSwitchTheme();

  return (
    <FormControlLabel
      control={
        <PurpleSwitch
          checked={isLightTheme}
          onChange={handleChange}
          name="light"
          inputProps={{ 'aria-label': 'theme checkbox' }}
        />
      }
      label="Dark"
      labelPlacement="start"
    />
  );
};
