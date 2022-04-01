import React, { FC } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

import CalculatorForm from './components/CalculatorForm';

export type FormData = { formData: { organization: string; users: string[] } };
type SubscribedBlockProps = {
  organizationName: string;
  usersAmount: string | number;
};

const MainPage: FC = () => {
  return (
    <Grid item>
      <Box flex={1}>
        <CalculatorForm />
      </Box>
    </Grid>
  );
};

export default MainPage;
