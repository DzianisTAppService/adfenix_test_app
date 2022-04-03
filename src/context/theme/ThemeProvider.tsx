import React, { FC } from 'react';
import { CssBaseline } from '@mui/material';

import MuiThemeProvider from 'common/ThemeProvider';

const ThemeProvider: FC = ({ children }) => (
  <>
    <CssBaseline />
    <MuiThemeProvider>{children}</MuiThemeProvider>
  </>
);

export default ThemeProvider;
