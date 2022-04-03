import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

export const ErrorPage = styled(Grid)`
  width: 100%;
  margin: 0 auto;
  padding-top: 43px;
  text-align: center;
`;

export const StyledTitle = styled(Typography)`
  text-transform: uppercase;
`;

export const StyledSubTitle = styled(Typography)`
  font-size: 66px;
  line-height: 83px;
`;

export const StyledSubTitle500 = styled(Typography)`
  font-size: 32px;
  line-height: 43px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
