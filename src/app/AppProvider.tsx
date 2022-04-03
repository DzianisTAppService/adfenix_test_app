import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from 'context/error';
import { ThemeProvider } from 'context/theme';

const AppProvider: FC = ({ children }) => (
  <ThemeProvider>
    <ErrorBoundary>
      <BrowserRouter>{children}</BrowserRouter>
    </ErrorBoundary>
  </ThemeProvider>
);

export default AppProvider;
