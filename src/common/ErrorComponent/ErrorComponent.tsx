import React, { FC } from 'react';
import ErrorPageController from 'common/ErrorPageController';
import { ErrorType } from '../ErrorPageController/ErrorPageController';

export const ServerErrorComponent: FC<{}> = () => {
  return <ErrorPageController type={ErrorType.type_500} />;
};

export const NotFoundErrorComponent: FC<{}> = () => {
  return <ErrorPageController type={ErrorType.type_404} />;
};
