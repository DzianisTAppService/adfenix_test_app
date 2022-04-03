import React, { FC, useEffect } from 'react';
import { Button, Grid } from '@mui/material';

import { ErrorPage, StyledLink, StyledSubTitle, StyledSubTitle500, StyledTitle } from './ErrorPageController.styles';

export enum ErrorType {
  type_404 = '404',
  type_500 = '500',
}
// type ErrorType = '404' | '500';
type ErrorObjectProps = {
  title: string;
  subText: JSX.Element;
  action: 'home' | null;
};
type ComponentPickerType = {
  [key in ErrorType]: ErrorObjectProps;
};

export interface ErrorPageControllerProps {
  type: ErrorType;
}

const ComponentPicker: ComponentPickerType = () => ({
  [ErrorType.type_404]: {
    title: 'Sorry friend',
    subText: <span>'The page you are looking for no longer exists.'</span>,
    action: 'home',
  },
  [ErrorType.type_500]: {
    title: 'Oops! Something went wrong.',
    subText: (
      <span>
        Try again in a little while. If the problem persists, please <StyledLink to='/'>chat with support</StyledLink>
        or <StyledLink to='/'>call on this phone</StyledLink>{' '}
      </span>
    ),
    action: null,
  },
});

const ErrorPageController: FC<ErrorPageControllerProps> = ({ type }): JSX.Element => {
  useEffect(() => {
    document.body.style.backgroundColor = 'white';
  }, [type]);

  const component = ComponentPicker[type];

  return (
    <ErrorPage container direction='column' spacing={5} justifyContent='center' alignItems='center'>
      <Grid item>
        {type === '500' ? (
          <Grid container direction='column' spacing={5}>
            <Grid item>
              <StyledTitle variant='body1'>{component.title}</StyledTitle>
            </Grid>
            <Grid item>
              <StyledSubTitle500 variant='subtitle1'>{component.subText}</StyledSubTitle500>
            </Grid>
          </Grid>
        ) : (
          <Grid container direction='column' spacing={5}>
            <Grid item>
              <StyledTitle variant='body1'>{component.title}</StyledTitle>
            </Grid>
            <Grid item>
              <StyledSubTitle variant='subtitle1'>{component.subText}</StyledSubTitle>
            </Grid>
          </Grid>
        )}
      </Grid>
      {component.action === 'home' && (
        <Grid item>
          <StyledLink to='/'>
            <Button type='button' variant='outlined'>
              Go Back
            </Button>
          </StyledLink>
        </Grid>
      )}
    </ErrorPage>
  );
};

export default ErrorPageController;
