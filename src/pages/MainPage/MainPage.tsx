import React, { FC } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import PATHS from 'constants/routes-paths';

export type FormData = { formData: { organization: string; users: string[] } };
type SubscribedBlockProps = {
  organizationName: string;
  usersAmount: string | number;
};

const MainPage: FC = () => {
  return (
    <Grid item>
      <Box flex={1}>
        Main page
      </Box>
    </Grid>
  );
};

export default MainPage;
