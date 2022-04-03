import React, { FC } from 'react';
import { Box, Grid } from '@mui/material';

import CalculatorForm from './components/CalculatorForm';

const MainPage: FC = () => (
  <Grid item>
    <Box flex={1}>
      <CalculatorForm />
    </Box>
  </Grid>
);

export default MainPage;
