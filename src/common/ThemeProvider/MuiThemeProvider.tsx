import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider, Theme, ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme: Theme = createTheme({
  status: {
    danger: 'orange',
  },
} as ThemeOptions);

const MuiThemeProvider = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children as React.ReactChild}</ThemeProvider>
);

export default MuiThemeProvider;
