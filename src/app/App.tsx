import React, { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import GlobalStyle from 'common/GlobalStyle';
import NavBar from 'common/NavBar';
import Routes from './Routes';
import PATHS from 'constants/routes-paths';

import { MainContentContainer, StyledAppContainer } from './App.styles';

const navItems = [
  { text: 'Main', linkTo: PATHS.welcome },
];

const App: FC = () => (
  <StyledAppContainer>
    <GlobalStyle />

    <NavBar links={navItems} />

    <MainContentContainer container direction='column'>
      <Box textAlign='center'>
        <Typography variant='h3'>Adfenix Test App</Typography>
      </Box>

      <Grid item container direction='column' alignItems='center' justifyContent='center' flexGrow={1}>
        <Routes />
      </Grid>
    </MainContentContainer>
  </StyledAppContainer>
);

export default App;
