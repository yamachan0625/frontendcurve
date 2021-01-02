import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#f5f5f5',
      main: '#ECEAEA',
      dark: '#ACA5A5',
      contrastText: '#434242',
    },
    secondary: {
      light: '#E6E6FA',
      main: '#fdd83c',
      dark: '#c6a102',
      contrastText: '#000',
    },
    type: 'light',
  },
  typography: {
    h1: {
      fontSize: '32px',
    },
    h2: {
      fontSize: '24px',
    },
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});
