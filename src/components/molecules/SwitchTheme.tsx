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
  const [isDarkTheme, setDarkTheme] = React.useState(true);

  React.useEffect(() => {
    window.localStorage.getItem('theme') !== 'DARK' && setDarkTheme(false);
  }, []);

  const handleChange = React.useCallback(() => {
    setDarkTheme(!isDarkTheme);
    handleThemeChange(isDarkTheme ? 'LIGHT' : 'DARK');
  }, [isDarkTheme, handleThemeChange, setDarkTheme]);

  return { isDarkTheme, handleChange };
};

export const SwitchTheme: React.FC = () => {
  const { isDarkTheme, handleChange } = useSwitchTheme();

  return (
    <FormControlLabel
      control={
        <PurpleSwitch
          checked={isDarkTheme}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'theme checkbox' }}
        />
      }
      label="Dark"
      labelPlacement="start"
    />
  );
};
