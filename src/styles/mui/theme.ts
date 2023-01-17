import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    background: {
      default: '#5f6783',
    },
  },
  typography: {
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
